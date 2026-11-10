(function() {
/**
 * K2 Five FedEx Shipping Rates Broker
 *
 * This JSSP broker gets shipping rates for a package between two addresses
 * from the FedEx Rates and Transit Times API v1 (POST /rate/v1/rates/quotes).
 *
 * Target Endpoint: https://apis-sandbox.fedex.com (production: https://apis.fedex.com)
 *
 * Features:
 * - Full Ship From / Ship To addresses (street lines, city, state, postal code, country, residential)
 * - All services as a list, or only the lowest rate
 * - Account and list rates, delivery date and transit time
 * - OAuth client credentials (FedEx), static bearer token (mock servers) or no auth
 *
 * Built against FedEx's OpenAPI spec (Full_Schema_Quote_Rate) and the
 * Rates and Transit Times JSON API collection.
 *
 * Build: npm run build
 * Output: dist/index.js
 */
// =============================================================================
// METADATA SECTION
// =============================================================================
metadata = {
    systemName: "FedExShippingRatesJSSP",
    displayName: "FedEx Shipping Rates",
    description: "Rate quotes and transit times between two addresses from the FedEx Rates and Transit Times API (v1).",
    configuration: {
        "BaseUrl": {
            displayName: "FedEx API Base URL",
            type: "string",
            required: true,
            value: "https://apis-sandbox.fedex.com"
        },
        "AuthMode": {
            displayName: "Authentication Mode",
            type: "string",
            required: true,
            value: "OAuth" // Options: "OAuth", "StaticToken", "None"
        },
        "ClientId": {
            displayName: "API Key (client_id, for OAuth)",
            type: "string",
            required: false,
            value: ""
        },
        "ClientSecret": {
            displayName: "Secret Key (client_secret, for OAuth)",
            type: "string",
            required: false,
            value: ""
        },
        "StaticToken": {
            displayName: "Static Bearer Token (if AuthMode=StaticToken)",
            type: "string",
            required: false,
            value: ""
        },
        "AccountNumber": {
            displayName: "FedEx Account Number",
            type: "string",
            required: true,
            value: ""
        },
        "Locale": {
            displayName: "Locale",
            type: "string",
            required: false,
            value: "en_US"
        }
    }
};
// =============================================================================
// ONDESCRIBE SECTION
// =============================================================================
const RATE_INPUTS = [
    "ShipperStreet1", "ShipperStreet2", "ShipperCity", "ShipperStateCode",
    "ShipperPostalCode", "ShipperCountryCode", "ShipperResidential",
    "RecipientStreet1", "RecipientStreet2", "RecipientCity", "RecipientStateCode",
    "RecipientPostalCode", "RecipientCountryCode", "RecipientResidential",
    "Weight", "WeightUnits", "Length", "Width", "Height", "DimensionUnits",
    "PackagingType", "ShipDate", "ServiceTypeFilter", "PickupType", "RateTypeFilter",
    "ReturnTransitTimes"
];
const RATE_REQUIRED_INPUTS = [
    "ShipperPostalCode", "ShipperCountryCode",
    "RecipientPostalCode", "RecipientCountryCode", "Weight"
];
const RATE_OUTPUTS = [
    "ServiceType", "ServiceName", "PackagingType", "RateType",
    "TotalBaseCharge", "TotalDiscounts", "TotalNetCharge", "Currency",
    "DeliveryDayOfWeek", "DeliveryDate", "TransitTime", "TransactionId"
];
ondescribe = async function ({ configuration }) {
    postSchema({
        objects: {
            // ---------------------------------------------------------------------
            // Service Object: RateQuote
            // ---------------------------------------------------------------------
            "RateQuote": {
                displayName: "FedEx Rate Quote",
                description: "Shipping rate quotes for one package between two addresses.",
                properties: {
                    // Ship From
                    "ShipperStreet1": { displayName: "Ship From Street Line 1", type: "string" },
                    "ShipperStreet2": { displayName: "Ship From Street Line 2", type: "string" },
                    "ShipperCity": { displayName: "Ship From City", type: "string" },
                    "ShipperStateCode": { displayName: "Ship From State Code", type: "string" },
                    "ShipperPostalCode": { displayName: "Ship From Postal Code", type: "string" },
                    "ShipperCountryCode": { displayName: "Ship From Country Code", type: "string" },
                    "ShipperResidential": { displayName: "Ship From Is Residential", type: "boolean" },
                    // Ship To
                    "RecipientStreet1": { displayName: "Ship To Street Line 1", type: "string" },
                    "RecipientStreet2": { displayName: "Ship To Street Line 2", type: "string" },
                    "RecipientCity": { displayName: "Ship To City", type: "string" },
                    "RecipientStateCode": { displayName: "Ship To State Code", type: "string" },
                    "RecipientPostalCode": { displayName: "Ship To Postal Code", type: "string" },
                    "RecipientCountryCode": { displayName: "Ship To Country Code", type: "string" },
                    "RecipientResidential": { displayName: "Ship To Is Residential", type: "boolean" },
                    // Package and options
                    "Weight": { displayName: "Weight", type: "number" },
                    "WeightUnits": { displayName: "Weight Units", type: "string" },
                    "Length": { displayName: "Length", type: "number" },
                    "Width": { displayName: "Width", type: "number" },
                    "Height": { displayName: "Height", type: "number" },
                    "DimensionUnits": { displayName: "Dimension Units", type: "string" },
                    "PackagingType": { displayName: "Packaging Type", type: "string" },
                    "ShipDate": { displayName: "Ship Date", type: "string" },
                    "ServiceTypeFilter": { displayName: "Service Type Filter", type: "string" },
                    "PickupType": { displayName: "Pickup Type", type: "string" },
                    "RateTypeFilter": { displayName: "Rate Type", type: "string" },
                    "ReturnTransitTimes": { displayName: "Return Transit Times", type: "boolean" },
                    // Results
                    "ServiceType": { displayName: "Service Type", type: "string" },
                    "ServiceName": { displayName: "Service Name", type: "string" },
                    "RateType": { displayName: "Rate Type Returned", type: "string" },
                    "TotalBaseCharge": { displayName: "Total Base Charge", type: "number" },
                    "TotalDiscounts": { displayName: "Total Discounts", type: "number" },
                    "TotalNetCharge": { displayName: "Total Net Charge", type: "number" },
                    "Currency": { displayName: "Currency", type: "string" },
                    "DeliveryDayOfWeek": { displayName: "Delivery Day Of Week", type: "string" },
                    "DeliveryDate": { displayName: "Delivery Date", type: "string" },
                    "TransitTime": { displayName: "Transit Time", type: "string" },
                    "TransactionId": { displayName: "FedEx Transaction ID", type: "string" }
                },
                methods: {
                    "GetRates": {
                        displayName: "Get Rates",
                        type: "list",
                        inputs: RATE_INPUTS,
                        requiredInputs: RATE_REQUIRED_INPUTS,
                        outputs: RATE_OUTPUTS
                    },
                    "GetLowestRate": {
                        displayName: "Get Lowest Rate",
                        type: "read",
                        inputs: RATE_INPUTS,
                        requiredInputs: RATE_REQUIRED_INPUTS,
                        outputs: RATE_OUTPUTS
                    }
                }
            },
            // ---------------------------------------------------------------------
            // Service Object: Connection
            // ---------------------------------------------------------------------
            "Connection": {
                displayName: "FedEx Connection",
                description: "Checks the service instance credentials (OAuth mode requests a token).",
                properties: {
                    "Success": { displayName: "Success", type: "boolean" },
                    "Message": { displayName: "Message", type: "string" },
                    "ExpiresIn": { displayName: "Token Expires In (seconds)", type: "number" }
                },
                methods: {
                    "TestConnection": {
                        displayName: "Test Connection",
                        type: "execute",
                        inputs: [],
                        outputs: ["Success", "Message", "ExpiresIn"]
                    }
                }
            }
        }
    });
};
// =============================================================================
// ONEXECUTE SECTION
// =============================================================================
onexecute = async function ({ objectName, methodName, parameters, properties, configuration, schema }) {
    switch (objectName) {
        case "RateQuote":
            await executeRateQuote(methodName, properties, configuration);
            break;
        case "Connection":
            await executeConnection(methodName, configuration);
            break;
        default:
            throw new Error(`The object "${objectName}" is not supported.`);
    }
};
// =============================================================================
// RATE QUOTE HANDLERS
// =============================================================================
async function executeRateQuote(methodName, properties, configuration) {
    switch (methodName) {
        case "GetRates":
            await executeGetRates(properties, configuration);
            break;
        case "GetLowestRate":
            await executeGetLowestRate(properties, configuration);
            break;
        default:
            throw new Error(`Method "${methodName}" is not supported for RateQuote.`);
    }
}
async function executeGetRates(properties, configuration) {
    const rows = await getRates(properties, configuration);
    postResult(rows);
}
async function executeGetLowestRate(properties, configuration) {
    const rows = await getRates(properties, configuration);
    postResult(lowestRate(rows));
}
// =============================================================================
// CONNECTION HANDLERS
// =============================================================================
async function executeConnection(methodName, configuration) {
    switch (methodName) {
        case "TestConnection":
            await executeTestConnection(configuration);
            break;
        default:
            throw new Error(`Method "${methodName}" is not supported for Connection.`);
    }
}
async function executeTestConnection(configuration) {
    try {
        const token = await getAccessToken(configuration);
        const mode = getAuthMode(configuration);
        postResult({
            Success: true,
            Message: mode === "OAUTH"
                ? "Token received."
                : `Auth mode ${mode}: no token request needed. Run Get Rates to test the endpoint.`,
            ExpiresIn: token.expiresIn
        });
    }
    catch (e) {
        postResult({
            Success: false,
            Message: e instanceof Error ? e.message : String(e),
            ExpiresIn: 0
        });
    }
}
// Token cache. JSSP may or may not keep module state between executions;
// if it doesn't, a new token is simply requested each call.
let tokenCache = { key: null, token: null, expires: 0 };
function getAuthMode(configuration) {
    return upper(configuration["AuthMode"]) || "OAUTH";
}
async function getAccessToken(configuration) {
    const mode = getAuthMode(configuration);
    if (mode === "NONE") {
        return { accessToken: null, expiresIn: 0 };
    }
    if (mode === "STATICTOKEN") {
        const staticToken = text(configuration["StaticToken"]);
        if (!staticToken) {
            throw new Error("Static Bearer Token must be set when Auth Mode is StaticToken.");
        }
        return { accessToken: staticToken, expiresIn: 0 };
    }
    if (mode !== "OAUTH") {
        throw new Error("Auth Mode must be OAuth, StaticToken or None.");
    }
    const clientId = text(configuration["ClientId"]);
    const clientSecret = text(configuration["ClientSecret"]);
    const cacheKey = `${normalizeBaseUrl(configuration["BaseUrl"])}|${clientId}`;
    const now = Date.now();
    if (tokenCache.key === cacheKey && tokenCache.token && now < tokenCache.expires) {
        return { accessToken: tokenCache.token, expiresIn: Math.round((tokenCache.expires - now) / 1000) };
    }
    if (!clientId || !clientSecret) {
        throw new Error("FedEx API Key and Secret Key must be set on the service instance.");
    }
    const body = "grant_type=client_credentials" +
        `&client_id=${encodeURIComponent(clientId)}` +
        `&client_secret=${encodeURIComponent(clientSecret)}`;
    const res = await makeFedExRequest("POST", `${normalizeBaseUrl(configuration["BaseUrl"])}/oauth/token`, { "Content-Type": "application/x-www-form-urlencoded" }, body);
    if (!res.json || !res.json.access_token) {
        throw new Error(`FedEx token request failed: ${describeError(res)}`);
    }
    const ttl = Number(res.json.expires_in) || 3600;
    tokenCache = { key: cacheKey, token: res.json.access_token, expires: Date.now() + (ttl - 60) * 1000 };
    return { accessToken: res.json.access_token, expiresIn: ttl };
}
async function getRates(properties, configuration) {
    const request = buildRateRequest(properties, configuration);
    const rateTypeFilter = upper(properties["RateTypeFilter"]) || "BOTH";
    const token = await getAccessToken(configuration);
    const headers = {
        "Content-Type": "application/json",
        "X-locale": text(configuration["Locale"]) || "en_US"
    };
    if (token.accessToken) {
        headers["Authorization"] = `Bearer ${token.accessToken}`;
    }
    const res = await makeFedExRequest("POST", `${normalizeBaseUrl(configuration["BaseUrl"])}/rate/v1/rates/quotes`, headers, JSON.stringify(request));
    if (res.status === 401) {
        tokenCache = { key: null, token: null, expires: 0 };
    }
    if (res.status < 200 || res.status >= 300) {
        throw new Error(`FedEx rate request failed: ${describeError(res)}`);
    }
    if (!res.json) {
        throw new Error(`FedEx rate request returned HTTP ${res.status} but the body was not valid JSON: ${res.text.substring(0, 300)}`);
    }
    if (!res.json.output) {
        throw new Error(`FedEx rate response has no 'output' element: ${res.text.substring(0, 300)}`);
    }
    return mapRateReply(res.json, rateTypeFilter);
}
// =============================================================================
// REQUEST BUILDING
// =============================================================================
function buildRateRequest(properties, configuration) {
    const accountNumber = text(configuration["AccountNumber"]);
    if (!accountNumber) {
        throw new Error("FedEx Account Number must be set on the service instance.");
    }
    const weight = Number(properties["Weight"]);
    if (!(weight > 0)) {
        throw new Error("Weight must be greater than 0.");
    }
    const packageLineItem = {
        weight: { units: upper(properties["WeightUnits"]) || "LB", value: weight }
    };
    if (properties["Length"] && properties["Width"] && properties["Height"]) {
        packageLineItem.dimensions = {
            length: Math.ceil(Number(properties["Length"])),
            width: Math.ceil(Number(properties["Width"])),
            height: Math.ceil(Number(properties["Height"])),
            units: upper(properties["DimensionUnits"]) || "IN"
        };
    }
    const rateTypeFilter = upper(properties["RateTypeFilter"]) || "BOTH";
    const rateRequestType = rateTypeFilter === "ACCOUNT" ? ["ACCOUNT"]
        : rateTypeFilter === "LIST" ? ["LIST"]
            : ["ACCOUNT", "LIST"];
    const requestedShipment = {
        shipper: {
            address: buildAddress("Ship From", properties["ShipperStreet1"], properties["ShipperStreet2"], properties["ShipperCity"], properties["ShipperStateCode"], properties["ShipperPostalCode"], properties["ShipperCountryCode"], properties["ShipperResidential"])
        },
        recipient: {
            address: buildAddress("Ship To", properties["RecipientStreet1"], properties["RecipientStreet2"], properties["RecipientCity"], properties["RecipientStateCode"], properties["RecipientPostalCode"], properties["RecipientCountryCode"], properties["RecipientResidential"])
        },
        pickupType: upper(properties["PickupType"]) || "DROPOFF_AT_FEDEX_LOCATION",
        rateRequestType: rateRequestType,
        requestedPackageLineItems: [packageLineItem]
    };
    if (properties["PackagingType"]) {
        requestedShipment.packagingType = upper(properties["PackagingType"]);
    }
    if (properties["ShipDate"]) {
        requestedShipment.shipDateStamp = text(properties["ShipDate"]).substring(0, 10);
    }
    if (properties["ServiceTypeFilter"]) {
        requestedShipment.serviceType = upper(properties["ServiceTypeFilter"]);
    }
    return {
        accountNumber: { value: accountNumber },
        rateRequestControlParameters: { returnTransitTimes: !isFalse(properties["ReturnTransitTimes"]) },
        requestedShipment: requestedShipment
    };
}
function buildAddress(label, street1, street2, city, stateCode, postalCode, countryCode, residential) {
    if (!countryCode) {
        throw new Error(`${label} country code is required.`);
    }
    if (!postalCode) {
        throw new Error(`${label} postal code is required.`);
    }
    const address = {};
    const streetLines = [text(street1), text(street2)].filter(line => line !== "");
    if (streetLines.length) {
        address.streetLines = streetLines;
    }
    if (text(city)) {
        address.city = text(city);
    }
    if (text(stateCode)) {
        address.stateOrProvinceCode = upper(stateCode);
    }
    address.postalCode = text(postalCode);
    address.countryCode = upper(countryCode);
    if (isTrue(residential)) {
        address.residential = true;
    }
    return address;
}
// =============================================================================
// RESPONSE MAPPING
// =============================================================================
function mapRateReply(json, rateTypeFilter) {
    const rows = [];
    const details = (json.output && json.output.rateReplyDetails) || [];
    for (const detail of details) {
        const commit = detail.commit || {};
        const dateDetail = commit.dateDetail || {};
        const rated = detail.ratedShipmentDetails || [];
        for (const rate of rated) {
            if (rateTypeFilter !== "BOTH" && upper(rate.rateType) !== rateTypeFilter) {
                continue;
            }
            // operationalDetail is usually on the service, but some replies put it on the rate entry
            const op = detail.operationalDetail || rate.operationalDetail || {};
            const netCharge = rate.totalNetCharge !== undefined && rate.totalNetCharge !== null
                ? rate.totalNetCharge
                : rate.totalNetFedExCharge;
            const row = {};
            setValue(row, "ServiceType", detail.serviceType);
            setValue(row, "ServiceName", detail.serviceName);
            setValue(row, "PackagingType", detail.packagingType);
            setValue(row, "RateType", rate.rateType);
            setValue(row, "TotalBaseCharge", toNumber(rate.totalBaseCharge));
            setValue(row, "TotalDiscounts", toNumber(rate.totalDiscounts));
            setValue(row, "TotalNetCharge", toNumber(netCharge));
            setValue(row, "Currency", rate.currency || (rate.shipmentRateDetail && rate.shipmentRateDetail.currency));
            setValue(row, "DeliveryDayOfWeek", dateDetail.dayOfWeek || op.deliveryDay);
            setValue(row, "DeliveryDate", dateDetail.dayFormat || dateDetail.dayCxsFormat || op.deliveryDate || op.commitDate);
            setValue(row, "TransitTime", op.transitTime || commit.daysInTransit ||
                (commit.transitDays && commit.transitDays.description));
            setValue(row, "TransactionId", json.transactionId);
            rows.push(row);
        }
    }
    return rows;
}
function lowestRate(rows) {
    let best = null;
    for (const row of rows) {
        if (typeof row["TotalNetCharge"] !== "number") {
            continue;
        }
        if (!best || row["TotalNetCharge"] < best["TotalNetCharge"]) {
            best = row;
        }
    }
    if (!best) {
        throw new Error("FedEx returned no rates for this shipment.");
    }
    return best;
}
// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
function normalizeBaseUrl(url) {
    return (text(url) || "https://apis-sandbox.fedex.com").replace(/\/+$/, "");
}
function makeFedExRequest(method, url, headers, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4)
                return;
            const responseText = xhr.responseText || "";
            let json = null;
            try {
                json = responseText ? JSON.parse(responseText) : null;
            }
            catch (e) {
                json = null;
            }
            resolve({ status: xhr.status, text: responseText, json: json });
        };
        xhr.onerror = function () {
            reject(new Error(`Network error calling ${url}`));
        };
        xhr.open(method, url);
        for (const name of Object.keys(headers)) {
            xhr.setRequestHeader(name, headers[name]);
        }
        xhr.send(body);
    });
}
function describeError(res) {
    let message = `HTTP ${res.status}`;
    const errors = (res.json && res.json.errors) || [];
    if (errors.length) {
        const max = 5;
        const parts = errors.slice(0, max).map(e => `${e.code ? e.code + ": " : ""}${e.message || ""}`);
        message += ` - ${parts.join("; ")}`;
        if (errors.length > max) {
            message += ` (+${errors.length - max} more)`;
        }
    }
    else if (res.text) {
        message += ` - ${res.text.substring(0, 300)}`;
    }
    return message;
}
function text(value) {
    return value === undefined || value === null ? "" : String(value).trim();
}
function upper(value) {
    return text(value).toUpperCase();
}
function isTrue(value) {
    return value === true || text(value).toLowerCase() === "true";
}
function isFalse(value) {
    return value === false || text(value).toLowerCase() === "false";
}
function toNumber(value) {
    if (value === undefined || value === null || value === "")
        return undefined;
    const n = Number(value);
    return isNaN(n) ? undefined : n;
}
// Only set values FedEx actually returned; K2 shows missing properties as empty.
function setValue(row, name, value) {
    if (value === undefined || value === null || value === "")
        return;
    row[name] = typeof value === "number" || typeof value === "boolean" ? value : String(value);
}
})();
