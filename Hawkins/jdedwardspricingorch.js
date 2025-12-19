import '@k2oss/k2-broker-core';

// Metadata section
metadata = {
    systemName: "com.jde.orchestration",
    displayName: "JD Edwards Orchestration",
    description: "Call JD Edwards 9.2 orchestration REST APIs with Basic or Bearer token authentication.",
    configuration: {
        "baseURL": {
            displayName: "Base URL",
            type: "string",
            required: true
        },
        "authType": {
            displayName: "Authentication Type",
            type: "string",
            value: "Basic"
        },
        "username": {
            displayName: "Username",
            type: "string"
        },
        "password": {
            displayName: "Password",
            type: "string"
        },
        "bearerToken": {
            displayName: "Bearer Token",
            type: "string"
        }
    }
};

// OnDescribe section
ondescribe = async function({ configuration }): Promise<void> {
    postSchema({
        objects: {
            "orchestration": {
                displayName: "Orchestration",
                description: "Call JD Edwards orchestrations",
                properties: {
                    "statusCode": { displayName: "Status Code", type: "number" },
                    "responseBody": { displayName: "Response Body", type: "string" },
                    "success": { displayName: "Success", type: "boolean" },
                    "errorMessage": { displayName: "Error Message", type: "string" },
                    "lineCount": { displayName: "Line Count", type: "number" },
                    "requestJSON": { displayName: "Request JSON", type: "string" },
                    "linesArrayJSON": { displayName: "Lines Array JSON", type: "string" }
                },
                methods: {
                    "addLineItem": {
                        displayName: "Add Line Item",
                        type: "read",
                        parameters: {
                            "existingLinesJSON": { displayName: "Existing Lines JSON", type: "string" },
                            "addj": { displayName: "Date (ADDJ)", type: "string" },
                            "lnty": { displayName: "Line Type (LNTY)", type: "string" },
                            "uorg": { displayName: "Quantity (UORG)", type: "string" },
                            "uom": { displayName: "UOM", type: "string" },
                            "litm": { displayName: "Item (LITM)", type: "string" },
                            "uprc": { displayName: "Unit Price (UPRC)", type: "string" },
                            "uom4": { displayName: "UOM4", type: "string" }
                        },
                        requiredParameters: [],
                        outputs: ["linesArrayJSON", "lineCount", "success", "errorMessage"]
                    },
                    "buildFullJSON": {
                        displayName: "Build Full JSON",
                        type: "read",
                        parameters: {
                            "linesArrayJSON": { displayName: "Lines Array JSON", type: "string" },
                            "shan": { displayName: "Ship To (SHAN)", type: "string" },
                            "vr01": { displayName: "Customer PO (VR01)", type: "string" },
                            "vr02": { displayName: "VR02", type: "string" },
                            "drqj": { displayName: "Requested Date (DRQJ)", type: "string" },
                            "prettyPrint": { displayName: "Pretty Print", type: "string" }
                        },
                        requiredParameters: ["linesArrayJSON"],
                        outputs: ["requestJSON", "success", "errorMessage", "lineCount"]
                    },
                    "callOrchestration": {
                        displayName: "Call Orchestration",
                        type: "execute",
                        parameters: {
                            "orchestrationName": { displayName: "Orchestration Name", type: "string" },
                            "shan": { displayName: "Ship To (SHAN)", type: "string" },
                            "vr01": { displayName: "Customer PO (VR01)", type: "string" },
                            "vr02": { displayName: "VR02", type: "string" },
                            "drqj": { displayName: "Requested Date (DRQJ)", type: "string" },
                            "gridInJSON": { displayName: "Grid Input (JSON)", type: "string" }
                        },
                        requiredParameters: ["orchestrationName"],
                        outputs: ["statusCode", "responseBody", "success", "errorMessage"]
                    },
                    "validateJSON": {
                        displayName: "Validate JSON",
                        type: "read",
                        parameters: {
                            "jsonString": { displayName: "JSON String", type: "string" }
                        },
                        requiredParameters: ["jsonString"],
                        outputs: ["success", "errorMessage", "requestJSON"]
                    },
                    "initializeEmptyArray": {
                        displayName: "Initialize Empty Array",
                        type: "read",
                        parameters: {},
                        requiredParameters: [],
                        outputs: ["linesArrayJSON", "success"]
                    }
                }
            }
        }
    });
};

// OnExecute section
onexecute = async function({ objectName, methodName, parameters, properties, configuration, schema }): Promise<void> {
    switch (objectName) {
        case "orchestration":
            await executeOrchestration(methodName, parameters, properties, configuration);
            break;
        default:
            throw new Error("The object " + objectName + " is not supported.");
    }
};

// Helper function to route orchestration methods
async function executeOrchestration(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "addLineItem":
            await addLineItem(parameters);
            break;
        case "buildFullJSON":
            await buildFullJSON(parameters);
            break;
        case "callOrchestration":
            await callOrchestration(parameters, configuration);
            break;
        case "validateJSON":
            await validateJSON(parameters);
            break;
        case "initializeEmptyArray":
            await initializeEmptyArray();
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}

// Method implementations
function addLineItem(parameters: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            // Parse existing lines or start with empty array
            let linesArray: any[] = [];
            
            if (parameters["existingLinesJSON"]) {
                try {
                    const parsed = JSON.parse(parameters["existingLinesJSON"] as string);
                    if (!Array.isArray(parsed)) {
                        throw new Error("Existing lines JSON is not an array");
                    }
                    linesArray = parsed;
                } catch (parseError) {
                    throw new Error("Invalid existing lines JSON: " + (parseError instanceof Error ? parseError.message : String(parseError)));
                }
            }

            // Build new line item object
            const lineItem: any = {};
            if (parameters["addj"]) lineItem.ADDJ = parameters["addj"];
            if (parameters["lnty"]) lineItem.LNTY = parameters["lnty"];
            if (parameters["uorg"]) lineItem.UORG = parameters["uorg"];
            if (parameters["uom"]) lineItem.UOM = parameters["uom"];
            if (parameters["litm"]) lineItem.LITM = parameters["litm"];
            if (parameters["uprc"]) lineItem.UPRC = parameters["uprc"];
            if (parameters["uom4"]) lineItem.UOM4 = parameters["uom4"];

            // Append new item
            linesArray.push(lineItem);

            postResult({
                "linesArrayJSON": JSON.stringify(linesArray),
                "lineCount": linesArray.length,
                "success": true,
                "errorMessage": ""
            });
            resolve();
        } catch (e) {
            postResult({
                "linesArrayJSON": "",
                "lineCount": 0,
                "success": false,
                "errorMessage": e instanceof Error ? e.message : String(e)
            });
            resolve();
        }
    });
}

function buildFullJSON(parameters: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            let linesArray: any[] = [];
            
            if (parameters["linesArrayJSON"]) {
                try {
                    const parsed = JSON.parse(parameters["linesArrayJSON"] as string);
                    if (!Array.isArray(parsed)) {
                        throw new Error("Lines array JSON is not an array");
                    }
                    linesArray = parsed;
                } catch (parseError) {
                    throw new Error("Invalid lines array JSON: " + (parseError instanceof Error ? parseError.message : String(parseError)));
                }
            }

            const requestBody: any = {};
            
            if (parameters["shan"]) requestBody.SHAN = parameters["shan"];
            if (parameters["vr01"]) requestBody.VR01 = parameters["vr01"];
            if (parameters["vr02"]) requestBody.VR02 = parameters["vr02"];
            if (parameters["drqj"]) requestBody.DRQJ = parameters["drqj"];

            if (linesArray.length > 0) {
                requestBody.GridIn_1_3 = linesArray;
            }

            const prettyPrint = parameters["prettyPrint"] && parameters["prettyPrint"].toString().toLowerCase() === "true";
            const jsonString = prettyPrint ? 
                JSON.stringify(requestBody, null, 2) : 
                JSON.stringify(requestBody);

            postResult({
                "requestJSON": jsonString,
                "success": true,
                "errorMessage": "",
                "lineCount": linesArray.length
            });
            resolve();
        } catch (e) {
            postResult({
                "requestJSON": "",
                "success": false,
                "errorMessage": e instanceof Error ? e.message : String(e),
                "lineCount": 0
            });
            resolve();
        }
    });
}

function callOrchestration(parameters: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            const baseURL = configuration["baseURL"];
            if (!baseURL) {
                throw new Error("Base URL is required in configuration");
            }

            let url = baseURL.toString();
            if (!url.endsWith('/')) {
                url += '/';
            }
            url += 'jderest/v2/orchestrator/' + parameters["orchestrationName"];

            const requestBody: any = {};
            if (parameters["shan"]) requestBody.SHAN = parameters["shan"];
            if (parameters["vr01"]) requestBody.VR01 = parameters["vr01"];
            if (parameters["vr02"]) requestBody.VR02 = parameters["vr02"];
            if (parameters["drqj"]) requestBody.DRQJ = parameters["drqj"];

            if (parameters["gridInJSON"]) {
                try {
                    requestBody.GridIn_1_3 = JSON.parse(parameters["gridInJSON"] as string);
                } catch (parseError) {
                    throw new Error("Invalid GridIn_JSON format: " + (parseError instanceof Error ? parseError.message : String(parseError)));
                }
            }

            const authHeader = getAuthHeader(configuration);

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                try {
                    if (xhr.readyState !== 4) return;

                    const isSuccess = xhr.status >= 200 && xhr.status < 300;
                    postResult({
                        "statusCode": xhr.status,
                        "responseBody": xhr.responseText,
                        "success": isSuccess,
                        "errorMessage": isSuccess ? "" : "HTTP " + xhr.status + ": " + xhr.statusText
                    });
                    resolve();
                } catch (e) {
                    reject(e);
                }
            };

            xhr.open("POST", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Authorization", authHeader);
            xhr.send(JSON.stringify(requestBody));

        } catch (e) {
            postResult({
                "statusCode": 0,
                "responseBody": "",
                "success": false,
                "errorMessage": e instanceof Error ? e.message : String(e)
            });
            resolve();
        }
    });
}

function validateJSON(parameters: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            const parsed = JSON.parse(parameters["jsonString"] as string);
            
            postResult({
                "success": true,
                "errorMessage": "",
                "requestJSON": JSON.stringify(parsed, null, 2)
            });
            resolve();
        } catch (e) {
            postResult({
                "success": false,
                "errorMessage": e instanceof Error ? e.message : String(e),
                "requestJSON": ""
            });
            resolve();
        }
    });
}

function initializeEmptyArray(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        try {
            postResult({
                "linesArrayJSON": "[]",
                "success": true
            });
            resolve();
        } catch (e) {
            postResult({
                "linesArrayJSON": "[]",
                "success": false
            });
            resolve();
        }
    });
}

// Helper function to get authentication header
function getAuthHeader(configuration: SingleRecord): string {
    const authType = configuration["authType"] || "Basic";
    
    if (authType.toString().toLowerCase() === "bearer") {
        if (!configuration["bearerToken"]) {
            throw new Error("Bearer token is required when AuthType is Bearer");
        }
        return "Bearer " + configuration["bearerToken"];
    } else {
        if (!configuration["username"] || !configuration["password"]) {
            throw new Error("Username and Password are required when AuthType is Basic");
        }
        const auth = btoa(configuration["username"] + ":" + configuration["password"]);
        return "Basic " + auth;
    }
}

// Base64 encoding helper for K2 Chakra engine
function btoa(str: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    
    for (let i = 0; i < str.length; i += 3) {
        const a = str.charCodeAt(i);
        const b = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;
        const c = i + 2 < str.length ? str.charCodeAt(i + 2) : 0;
        
        const bitmap = (a << 16) | (b << 8) | c;
        
        output += chars[(bitmap >> 18) & 63];
        output += chars[(bitmap >> 12) & 63];
        output += chars[i + 1 < str.length ? (bitmap >> 6) & 63 : 64];
        output += chars[i + 2 < str.length ? bitmap & 63 : 64];
    }
    
    return output;
}
