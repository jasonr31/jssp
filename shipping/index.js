/*
 * FedEx Shipping Rates - JavaScript Service Provider (JSSP) service type for K2
 *
 * Calls the FedEx Rates and Transit Times API v1 (POST /rate/v1/rates/quotes) for a
 * shipment between two addresses. Built against FedEx's OpenAPI spec (rate.json) and
 * the Rates and Transit Times JSON API collection.
 *
 * Defaults to the FedEx sandbox (https://apis-sandbox.fedex.com) with OAuth client
 * credentials. Production: BaseUrl = https://apis.fedex.com.
 * Mocks without a token endpoint (e.g. Beeceptor): AuthMode = StaticToken.
 *
 * Register this file with "Create From File" in the JSSP management SmartObject,
 * or host it at a URL and register with the URL.
 *
 * Service objects
 *   RateQuote.GetRates       (list)  one row per FedEx service (and rate type)
 *   RateQuote.GetLowestRate  (read)  cheapest matching service
 *   Connection.TestConnection (execute) checks the client ID/secret by requesting a token
 *
 * Written as plain Promise-based JavaScript (no async/await, no build step).
 */

/* ------------------------------------------------------------------ */
/* Metadata and service keys                                           */
/* ------------------------------------------------------------------ */

metadata = {
    systemName: "FedExShippingRatesJSSP",
    displayName: "FedEx Shipping Rates",
    description: "Rate quotes and transit times from the FedEx Rates and Transit Times API (v1).",
    configuration: {
        BaseUrl: {
            displayName: "FedEx API Base URL",
            type: "string",
            value: "https://apis-sandbox.fedex.com",
            required: true
        },
        AuthMode: {
            displayName: "Auth Mode (OAuth, StaticToken or None)",
            type: "string",
            value: "OAuth",
            required: true
        },
        StaticToken: {
            displayName: "Static Bearer Token (StaticToken mode)",
            type: "string",
            required: false
        },
        ClientId: {
            displayName: "API Key (client_id, OAuth mode)",
            type: "string",
            required: false
        },
        ClientSecret: {
            displayName: "Secret Key (client_secret, OAuth mode)",
            type: "string",
            required: false
        },
        AccountNumber: {
            displayName: "FedEx Account Number",
            type: "string",
            required: true
        },
        Locale: {
            displayName: "Locale",
            type: "string",
            value: "en_US",
            required: false
        }
    }
};

/* ------------------------------------------------------------------ */
/* Schema                                                              */
/* ------------------------------------------------------------------ */

var RATE_INPUTS = [
    "ShipperStreet1", "ShipperStreet2", "ShipperCity", "ShipperStateCode",
    "ShipperPostalCode", "ShipperCountryCode", "ShipperResidential",
    "RecipientStreet1", "RecipientStreet2", "RecipientCity", "RecipientStateCode",
    "RecipientPostalCode", "RecipientCountryCode", "RecipientResidential",
    "Weight", "WeightUnits", "Length", "Width", "Height", "DimensionUnits",
    "PackagingType", "ShipDate", "ServiceTypeFilter", "PickupType", "RateTypeFilter",
    "ReturnTransitTimes"
];

var RATE_OUTPUTS = [
    "ServiceType", "ServiceName", "PackagingType", "RateType",
    "TotalBaseCharge", "TotalDiscounts", "TotalNetCharge", "Currency",
    "DeliveryDayOfWeek", "DeliveryDate", "TransitTime", "TransactionId"
];

var RATE_REQUIRED = [
    "ShipperPostalCode", "ShipperCountryCode",
    "RecipientPostalCode", "RecipientCountryCode", "Weight"
];

function prop(displayName, type, description) {
    return { displayName: displayName, type: type, description: description || "" };
}

ondescribe = function (_ref) {
    postSchema({
        objects: {
            RateQuote: {
                displayName: "FedEx Rate Quote",
                description: "Shipping rate quotes for a single package.",
                properties: {
                    // inputs
                    ShipperStreet1: prop("Ship From Street Line 1", "string", "Optional"),
                    ShipperStreet2: prop("Ship From Street Line 2", "string", "Optional"),
                    ShipperCity: prop("Ship From City", "string", "Optional"),
                    ShipperStateCode: prop("Ship From State Code", "string", "2-letter; required by FedEx for US, CA, PR"),
                    ShipperPostalCode: prop("Ship From Postal Code", "string"),
                    ShipperCountryCode: prop("Ship From Country Code", "string", "ISO 2-letter, e.g. US"),
                    ShipperResidential: prop("Ship From Is Residential", "boolean"),
                    RecipientStreet1: prop("Ship To Street Line 1", "string", "Optional"),
                    RecipientStreet2: prop("Ship To Street Line 2", "string", "Optional"),
                    RecipientCity: prop("Ship To City", "string", "Optional"),
                    RecipientStateCode: prop("Ship To State Code", "string", "2-letter; required by FedEx for US, CA, PR"),
                    RecipientPostalCode: prop("Ship To Postal Code", "string"),
                    RecipientCountryCode: prop("Ship To Country Code", "string", "ISO 2-letter, e.g. US"),
                    RecipientResidential: prop("Ship To Is Residential", "boolean"),
                    PackagingType: prop("Packaging Type", "string", "Optional, e.g. YOUR_PACKAGING, FEDEX_ENVELOPE, FEDEX_PAK"),
                    ReturnTransitTimes: prop("Return Transit Times", "boolean", "Default true"),
                    Weight: prop("Weight", "number"),
                    WeightUnits: prop("Weight Units", "string", "LB (default) or KG"),
                    Length: prop("Length", "number", "Optional, whole units"),
                    Width: prop("Width", "number", "Optional, whole units"),
                    Height: prop("Height", "number", "Optional, whole units"),
                    DimensionUnits: prop("Dimension Units", "string", "IN (default) or CM"),
                    ShipDate: prop("Ship Date", "string", "YYYY-MM-DD (optional, defaults to today)"),
                    ServiceTypeFilter: prop("Service Type Filter", "string", "Optional, e.g. FEDEX_GROUND. Blank = all services"),
                    PickupType: prop("Pickup Type", "string", "DROPOFF_AT_FEDEX_LOCATION (default), CONTACT_FEDEX_TO_SCHEDULE, USE_SCHEDULED_PICKUP"),
                    RateTypeFilter: prop("Rate Type", "string", "BOTH (default, ACCOUNT + LIST), ACCOUNT or LIST"),
                    // outputs
                    ServiceType: prop("Service Type", "string"),
                    ServiceName: prop("Service Name", "string"),
                    PackagingType: prop("Packaging Type", "string"),
                    RateType: prop("Rate Type", "string"),
                    TotalBaseCharge: prop("Total Base Charge", "number"),
                    TotalDiscounts: prop("Total Discounts", "number"),
                    TotalNetCharge: prop("Total Net Charge", "number"),
                    Currency: prop("Currency", "string"),
                    DeliveryDayOfWeek: prop("Delivery Day Of Week", "string"),
                    DeliveryDate: prop("Delivery Date", "string"),
                    TransitTime: prop("Transit Time", "string", "e.g. TWO_DAYS"),
                    TransactionId: prop("FedEx Transaction ID", "string")
                },
                methods: {
                    GetRates: {
                        displayName: "Get Rates",
                        type: "list",
                        inputs: RATE_INPUTS,
                        requiredInputs: RATE_REQUIRED,
                        outputs: RATE_OUTPUTS
                    },
                    GetLowestRate: {
                        displayName: "Get Lowest Rate",
                        type: "read",
                        inputs: RATE_INPUTS,
                        requiredInputs: RATE_REQUIRED,
                        outputs: RATE_OUTPUTS
                    }
                }
            },
            Connection: {
                displayName: "FedEx Connection",
                description: "Checks the service instance credentials (OAuth mode requests a token).",
                properties: {
                    Success: prop("Success", "boolean"),
                    Message: prop("Message", "string"),
                    ExpiresIn: prop("Token Expires In (seconds)", "number")
                },
                methods: {
                    TestConnection: {
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

/* ------------------------------------------------------------------ */
/* Execute                                                             */
/* ------------------------------------------------------------------ */

onexecute = function (ctx) {
    var objectName = ctx.objectName;
    var methodName = ctx.methodName;
    var properties = ctx.properties || {};
    var configuration = ctx.configuration || {};

    switch (objectName) {
        case "RateQuote":
            if (methodName === "GetRates") {
                return getRates(properties, configuration).then(function (rows) {
                    postResult(rows);
                });
            }
            if (methodName === "GetLowestRate") {
                return getRates(properties, configuration).then(function (rows) {
                    postResult(lowest(rows));
                });
            }
            throw new Error("The method " + methodName + " is not supported on " + objectName + ".");
        case "Connection":
            if (methodName === "TestConnection") {
                return testConnection(configuration).then(function (r) { postResult(r); });
            }
            throw new Error("The method " + methodName + " is not supported on " + objectName + ".");
        default:
            throw new Error("The object " + objectName + " is not supported.");
    }
};

/* ------------------------------------------------------------------ */
/* FedEx calls                                                         */
/* ------------------------------------------------------------------ */

// Token cache. JSSP may or may not keep module state between executions;
// if it doesn't, a new token is simply requested each call.
var tokenCache = { key: null, token: null, expires: 0 };

function baseUrl(configuration) {
    return String(configuration.BaseUrl || "https://apis-sandbox.fedex.com").replace(/\/+$/, "");
}

function authMode(configuration) {
    return upper(configuration.AuthMode) || "OAUTH";
}

function getToken(configuration) {
    var mode = authMode(configuration);
    if (mode === "NONE") {
        return Promise.resolve({ access_token: null, expires_in: 0 });
    }
    if (mode === "STATICTOKEN") {
        if (!configuration.StaticToken) {
            return Promise.reject(new Error("Static Bearer Token must be set when Auth Mode is StaticToken."));
        }
        return Promise.resolve({ access_token: configuration.StaticToken, expires_in: 0 });
    }
    if (mode !== "OAUTH") {
        return Promise.reject(new Error("Auth Mode must be StaticToken, OAuth or None."));
    }
    var cacheKey = baseUrl(configuration) + "|" + configuration.ClientId;
    var now = Date.now();
    if (tokenCache.key === cacheKey && tokenCache.token && now < tokenCache.expires) {
        return Promise.resolve({ access_token: tokenCache.token, expires_in: Math.round((tokenCache.expires - now) / 1000) });
    }
    if (!configuration.ClientId || !configuration.ClientSecret) {
        return Promise.reject(new Error("FedEx API Key and Secret Key must be set on the service instance."));
    }
    var body = "grant_type=client_credentials" +
        "&client_id=" + encodeURIComponent(configuration.ClientId) +
        "&client_secret=" + encodeURIComponent(configuration.ClientSecret);

    return httpRequest("POST", baseUrl(configuration) + "/oauth/token",
        { "Content-Type": "application/x-www-form-urlencoded" }, body)
        .then(function (res) {
            if (!res.json || !res.json.access_token) {
                throw new Error("FedEx token request failed: " + describeError(res));
            }
            var ttl = Number(res.json.expires_in) || 3600;
            tokenCache = { key: cacheKey, token: res.json.access_token, expires: Date.now() + (ttl - 60) * 1000 };
            return res.json;
        });
}

function testConnection(configuration) {
    return getToken(configuration).then(function (t) {
        var mode = authMode(configuration);
        var msg = mode === "OAUTH" ? "Token received." :
            "Auth mode " + mode + ": no token request needed. Run Get Rates to test the endpoint.";
        return { Success: true, Message: msg, ExpiresIn: Number(t.expires_in) || 0 };
    }, function (e) {
        return { Success: false, Message: e && e.message ? e.message : String(e), ExpiresIn: 0 };
    });
}

function getRates(p, configuration) {
    var request;
    try {
        request = buildRateRequest(p, configuration);
    } catch (e) {
        return Promise.reject(e);
    }
    var rateTypeFilter = upper(p.RateTypeFilter) || "BOTH";

    return getToken(configuration).then(function (t) {
        var headers = {
            "Content-Type": "application/json",
            "X-locale": configuration.Locale || "en_US"
        };
        if (t.access_token) { headers.Authorization = "Bearer " + t.access_token; }
        return httpRequest("POST", baseUrl(configuration) + "/rate/v1/rates/quotes", headers, JSON.stringify(request));
    }).then(function (res) {
        if (res.status === 401) {
            tokenCache = { key: null, token: null, expires: 0 };
        }
        if (res.status < 200 || res.status >= 300) {
            throw new Error("FedEx rate request failed: " + describeError(res));
        }
        if (!res.json) {
            throw new Error("FedEx rate request returned HTTP " + res.status + " but the body was not valid JSON: " +
                String(res.text || "").substring(0, 300));
        }
        if (!res.json.output) {
            throw new Error("FedEx rate response has no 'output' element: " + String(res.text || "").substring(0, 300));
        }
        return mapRates(res.json, rateTypeFilter);
    });
}

function buildRateRequest(p, configuration) {
    if (!configuration.AccountNumber) {
        throw new Error("FedEx Account Number must be set on the service instance.");
    }
    var weight = Number(p.Weight);
    if (!(weight > 0)) {
        throw new Error("Weight must be greater than 0.");
    }

    var pkg = { weight: { units: upper(p.WeightUnits) || "LB", value: weight } };
    if (p.Length && p.Width && p.Height) {
        pkg.dimensions = {
            length: Math.ceil(Number(p.Length)),
            width: Math.ceil(Number(p.Width)),
            height: Math.ceil(Number(p.Height)),
            units: upper(p.DimensionUnits) || "IN"
        };
    }

    var rateTypeFilter = upper(p.RateTypeFilter) || "BOTH";
    var rateRequestType = rateTypeFilter === "ACCOUNT" ? ["ACCOUNT"] :
        rateTypeFilter === "LIST" ? ["LIST"] : ["ACCOUNT", "LIST"];

    var shipment = {
        shipper: { address: address("Ship From", p.ShipperStreet1, p.ShipperStreet2, p.ShipperCity,
            p.ShipperStateCode, p.ShipperPostalCode, p.ShipperCountryCode, p.ShipperResidential) },
        recipient: { address: address("Ship To", p.RecipientStreet1, p.RecipientStreet2, p.RecipientCity,
            p.RecipientStateCode, p.RecipientPostalCode, p.RecipientCountryCode, p.RecipientResidential) },
        pickupType: upper(p.PickupType) || "DROPOFF_AT_FEDEX_LOCATION",
        rateRequestType: rateRequestType,
        requestedPackageLineItems: [pkg]
    };
    if (p.PackagingType) {
        shipment.packagingType = upper(p.PackagingType);
    }
    if (p.ShipDate) {
        shipment.shipDateStamp = String(p.ShipDate).substring(0, 10);
    }
    if (p.ServiceTypeFilter) {
        shipment.serviceType = upper(p.ServiceTypeFilter);
    }

    var returnTransitTimes = !isFalse(p.ReturnTransitTimes);
    return {
        accountNumber: { value: String(configuration.AccountNumber) },
        rateRequestControlParameters: { returnTransitTimes: returnTransitTimes },
        requestedShipment: shipment
    };
}

function address(label, street1, street2, city, stateCode, postalCode, countryCode, residential) {
    if (!countryCode) {
        throw new Error(label + " country code is required.");
    }
    if (!postalCode) {
        throw new Error(label + " postal code is required.");
    }
    var a = {};
    var lines = [];
    if (street1) { lines.push(String(street1).trim()); }
    if (street2) { lines.push(String(street2).trim()); }
    if (lines.length) { a.streetLines = lines; }
    if (city) { a.city = String(city).trim(); }
    if (stateCode) { a.stateOrProvinceCode = upper(stateCode); }
    a.postalCode = String(postalCode).trim();
    a.countryCode = upper(countryCode);
    if (isTrue(residential)) { a.residential = true; }
    return a;
}

function isTrue(v) {
    return v === true || String(v).toLowerCase() === "true";
}

function isFalse(v) {
    return v === false || String(v).toLowerCase() === "false";
}

function mapRates(json, rateTypeFilter) {
    var rows = [];
    var details = (json.output && json.output.rateReplyDetails) || [];
    for (var i = 0; i < details.length; i++) {
        var d = details[i];
        var dateDetail = (d.commit && d.commit.dateDetail) || {};
        var rated = d.ratedShipmentDetails || [];
        for (var j = 0; j < rated.length; j++) {
            var r = rated[j];
            // operationalDetail is on the service in most replies, but some put it on the rate entry
            var op = d.operationalDetail || r.operationalDetail || {};
            if (rateTypeFilter !== "BOTH" && upper(r.rateType) !== rateTypeFilter) { continue; }
            rows.push({
                ServiceType: d.serviceType || null,
                ServiceName: d.serviceName || null,
                PackagingType: d.packagingType || null,
                RateType: r.rateType || null,
                TotalBaseCharge: num(r.totalBaseCharge),
                TotalDiscounts: num(r.totalDiscounts),
                TotalNetCharge: num(r.totalNetCharge !== undefined && r.totalNetCharge !== null ? r.totalNetCharge : r.totalNetFedExCharge),
                Currency: r.currency || (r.shipmentRateDetail && r.shipmentRateDetail.currency) || null,
                DeliveryDayOfWeek: dateDetail.dayOfWeek || op.deliveryDay || null,
                DeliveryDate: dateDetail.dayFormat || dateDetail.dayCxsFormat || op.deliveryDate || op.commitDate || null,
                TransitTime: op.transitTime || (d.commit && d.commit.daysInTransit) ||
                    (d.commit && d.commit.transitDays && d.commit.transitDays.description) || null,
                TransactionId: json.transactionId || null
            });
        }
    }
    return rows;
}

function lowest(rows) {
    var best = null;
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].TotalNetCharge === null) { continue; }
        if (!best || rows[i].TotalNetCharge < best.TotalNetCharge) { best = rows[i]; }
    }
    if (!best) { throw new Error("FedEx returned no rates for this shipment."); }
    return best;
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function httpRequest(method, url, headers, body) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) { return; }
            var text = xhr.responseText;
            var json = null;
            try { json = text ? JSON.parse(text) : null; } catch (e) { json = null; }
            resolve({ status: xhr.status, text: text, json: json });
        };
        xhr.onerror = function () { reject(new Error("Network error calling " + url)); };
        xhr.open(method, url);
        for (var h in headers) {
            if (Object.prototype.hasOwnProperty.call(headers, h)) { xhr.setRequestHeader(h, headers[h]); }
        }
        xhr.send(body);
    });
}

function describeError(res) {
    var msg = "HTTP " + res.status;
    if (res.json && res.json.errors && res.json.errors.length) {
        var parts = [];
        var max = 5;
        for (var i = 0; i < res.json.errors.length && i < max; i++) {
            var e = res.json.errors[i];
            parts.push((e.code ? e.code + ": " : "") + (e.message || ""));
        }
        msg += " - " + parts.join("; ");
        if (res.json.errors.length > max) {
            msg += " (+" + (res.json.errors.length - max) + " more)";
        }
    } else if (res.text) {
        msg += " - " + String(res.text).substring(0, 300);
    }
    return msg;
}

function upper(v) {
    return v === undefined || v === null || v === "" ? "" : String(v).trim().toUpperCase();
}

function num(v) {
    var n = Number(v);
    return v === undefined || v === null || isNaN(n) ? null : n;
}
