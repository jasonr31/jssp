import '@k2oss/k2-broker-core';

metadata = {
    systemName: "com.k2.azureblobstorage",
    displayName: "Azure Blob Storage API",
    description: "File download from Azure Blob Storage with OAuth authentication based on Swagger definition v1.0.0",
    configuration: {
        host: {
            displayName: "Storage Host",
            type: "string",
            required: true,
            value: "mrohstoragetechrefdev01.blob.core.windows.net"
        },
        basePath: {
            displayName: "Base Path",
            type: "string",
            required: true,
            value: "/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References"
        },
        apiVersion: {
            displayName: "Azure Storage API Version",
            type: "string",
            required: false,
            value: "2021-08-06"
        },
        oauthResourceId: {
            displayName: "OAuth Resource ID",
            type: "string",
            required: true,
            value: ""
        }
    }
};

ondescribe = async function ({ configuration }): Promise<void> {
    postSchema({
        objects: {
            ReadmeFile: {
                displayName: "Readme File",
                description: "Download readme.txt from Azure Blob Storage (Swagger path: /readme.txt)",
                properties: {
                    content: {
                        displayName: "Content",
                        type: "string"
                    },
                    success: {
                        displayName: "Success",
                        type: "boolean"
                    },
                    errorMessage: {
                        displayName: "Error Message",
                        type: "string"
                    },
                    statusCode: {
                        displayName: "Status Code",
                        type: "number"
                    }
                },
                methods: {
                    GetReadmeFile: {
                        displayName: "Get Readme File",
                        type: "read",
                        outputs: ["content", "success", "errorMessage", "statusCode"]
                    }
                }
            },
            CustomFile: {
                displayName: "Custom File",
                description: "Download any file from the configured base path",
                properties: {
                    fileName: {
                        displayName: "File Name",
                        type: "string"
                    },
                    content: {
                        displayName: "Content",
                        type: "string"
                    },
                    success: {
                        displayName: "Success",
                        type: "boolean"
                    },
                    errorMessage: {
                        displayName: "Error Message",
                        type: "string"
                    },
                    statusCode: {
                        displayName: "Status Code",
                        type: "number"
                    }
                },
                methods: {
                    DownloadFile: {
                        displayName: "Download File",
                        type: "read",
                        inputs: ["fileName"],
                        outputs: ["fileName", "content", "success", "errorMessage", "statusCode"]
                    }
                }
            }
        }
    });
}

onexecute = async function ({ objectName, methodName, parameters, properties, configuration, schema }): Promise<void> {
    switch (objectName) {
        case "ReadmeFile":
            await onexecuteReadmeFile(methodName, parameters, properties, configuration);
            break;
        case "CustomFile":
            await onexecuteCustomFile(methodName, parameters, properties, configuration);
            break;
        default:
            throw new Error(`Object ${objectName} is not supported.`);
    }
}

async function onexecuteReadmeFile(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "GetReadmeFile":
            await getReadmeFile(configuration);
            break;
        default:
            throw new Error(`Method ${methodName} is not supported for ReadmeFile object.`);
    }
}

async function onexecuteCustomFile(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "DownloadFile":
            await downloadFile(properties, configuration);
            break;
        default:
            throw new Error(`Method ${methodName} is not supported for CustomFile object.`);
    }
}

async function getReadmeFile(configuration: SingleRecord): Promise<void> {
    const host = configuration["host"];
    const basePath = configuration["basePath"];
    const apiVersion = configuration["apiVersion"];
    const oauthResourceId = configuration["oauthResourceId"];

    // Build URL from Swagger definition
    const url = `https://${host}${basePath}/readme.txt`;

    try {
        // Get OAuth token from K2's OAuth resource
        const token = await getOAuthToken(oauthResourceId);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "text/plain",
                "x-ms-version": apiVersion
            }
        });

        if (response.ok) {
            const content = await response.text();
            postResult({
                content: content,
                success: true,
                errorMessage: "",
                statusCode: response.status
            });
        } else {
            let errorMsg = response.statusText || "File not found";
            if (response.status === 404) {
                errorMsg = "File not found";
            } else if (response.status === 401) {
                errorMsg = "Authentication failed: Unauthorized. Check OAuth configuration.";
            } else if (response.status === 403) {
                errorMsg = "Authentication failed: Forbidden. Check storage permissions.";
            }

            postResult({
                content: "",
                success: false,
                errorMessage: errorMsg,
                statusCode: response.status
            });
        }
    } catch (error) {
        postResult({
            content: "",
            success: false,
            errorMessage: error.message || "Request failed",
            statusCode: 0
        });
    }
}

async function downloadFile(properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    const host = configuration["host"];
    const basePath = configuration["basePath"];
    const apiVersion = configuration["apiVersion"];
    const oauthResourceId = configuration["oauthResourceId"];
    let fileName = properties["fileName"] as string;

    // Ensure fileName doesn't start with /
    if (fileName.startsWith('/')) {
        fileName = fileName.substring(1);
    }

    // Build URL
    const url = `https://${host}${basePath}/${fileName}`;

    try {
        // Get OAuth token from K2's OAuth resource
        const token = await getOAuthToken(oauthResourceId);

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "text/plain",
                "x-ms-version": apiVersion
            }
        });

        if (response.ok) {
            const content = await response.text();
            postResult({
                fileName: properties["fileName"],
                content: content,
                success: true,
                errorMessage: "",
                statusCode: response.status
            });
        } else {
            let errorMsg = response.statusText || "File not found";
            if (response.status === 404) {
                errorMsg = "File not found";
            } else if (response.status === 401) {
                errorMsg = "Authentication failed: Unauthorized. Check OAuth configuration.";
            } else if (response.status === 403) {
                errorMsg = "Authentication failed: Forbidden. Check storage permissions.";
            }

            postResult({
                fileName: properties["fileName"],
                content: "",
                success: false,
                errorMessage: errorMsg,
                statusCode: response.status
            });
        }
    } catch (error) {
        postResult({
            fileName: properties["fileName"],
            content: "",
            success: false,
            errorMessage: error.message || "Request failed",
            statusCode: 0
        });
    }
}

async function getOAuthToken(resourceId: string): Promise<string> {
    // K2 Cloud provides OAuth tokens through the K2 OAuth resource mechanism
    // The token is retrieved using the resource ID configured in the service instance
    // This is a placeholder - K2 handles OAuth token retrieval internally
    // when the service is configured with an OAuth resource
    
    // In the actual K2 environment, you would configure the OAuth resource in K2 Management
    // and reference it by ID here. K2 automatically injects the token at runtime.
    
    if (!resourceId || resourceId === "") {
        throw new Error("OAuth Resource ID is required. Please configure an OAuth resource in K2 Management.");
    }
    
    // This token retrieval is handled by K2's infrastructure when properly configured
    // The actual implementation depends on how K2 Cloud exposes OAuth tokens to JSSP brokers
    throw new Error("OAuth token retrieval must be implemented based on K2 Cloud's OAuth resource mechanism. Please refer to K2 documentation for the correct OAuth integration pattern.");
}
