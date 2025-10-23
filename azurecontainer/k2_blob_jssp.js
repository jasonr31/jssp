(function() {
    // Service Provider with K2 OAuth Resource for Azure Blob Storage
    var serviceProvider = {
        name: "BlobFileDownloadAPI",
        displayName: "Blob File Download API",
        description: "File download from Azure Blob Storage with OAuth authentication",
        version: "1.0.0",
        
        // K2 OAuth Resource configuration
        authentication: {
            type: "oauth",
            oauth: {
                displayName: "Azure AD OAuth",
                description: "OAuth authentication for Azure Blob Storage",
                required: true,
                // OAuth resource name will be selected during service instance configuration
                resourceName: ""
            }
        },

        // Service configuration based on Swagger host and basePath
        configuration: {
            host: {
                displayName: "Host",
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
            }
        },

        // Service Objects
        objects: {
            ReadmeFile: {
                displayName: "Readme File",
                description: "Download readme.txt from Azure Blob Storage",
                
                properties: {
                    content: {
                        displayName: "Content",
                        type: "string",
                        required: false
                    },
                    success: {
                        displayName: "Success",
                        type: "boolean",
                        required: false
                    },
                    errorMessage: {
                        displayName: "Error Message",
                        type: "string",
                        required: false
                    },
                    statusCode: {
                        displayName: "Status Code",
                        type: "number",
                        required: false
                    }
                },

                methods: {
                    GetReadmeFile: {
                        displayName: "Get Readme File",
                        description: "Download readme.txt file from Azure Blob Storage (GET /readme.txt)",
                        type: "read",
                        
                        parameters: {
                            input: [],
                            output: ["content", "success", "errorMessage", "statusCode"]
                        },

                        execute: function(inputs, context) {
                            var config = serviceProvider.configuration;
                            var host = config.host.value;
                            var basePath = config.basePath.value;
                            var apiVersion = config.apiVersion.value;

                            // Build URL from Swagger definition
                            var url = "https://" + host + basePath + "/readme.txt";

                            // Get OAuth token from K2 context
                            var accessToken = context.auth.accessToken;

                            if (!accessToken) {
                                return Promise.resolve({
                                    content: "",
                                    success: false,
                                    errorMessage: "OAuth token not available. Please configure OAuth resource.",
                                    statusCode: 401
                                });
                            }

                            return $.ajax({
                                url: url,
                                method: "GET",
                                headers: {
                                    "Authorization": "Bearer " + accessToken,
                                    "Accept": "text/plain",
                                    "x-ms-version": apiVersion
                                },
                                dataType: "text"
                            }).then(function(response, textStatus, jqXHR) {
                                return {
                                    content: response,
                                    success: true,
                                    errorMessage: "",
                                    statusCode: jqXHR.status
                                };
                            }).catch(function(jqXHR, textStatus, errorThrown) {
                                var statusCode = jqXHR.status || 0;
                                var errorMsg = errorThrown || textStatus || "File not found";
                                
                                if (statusCode === 404) {
                                    errorMsg = "File not found";
                                } else if (statusCode === 401) {
                                    errorMsg = "Authentication failed: Unauthorized. Check OAuth configuration.";
                                } else if (statusCode === 403) {
                                    errorMsg = "Authentication failed: Forbidden. Check storage permissions.";
                                }

                                return {
                                    content: "",
                                    success: false,
                                    errorMessage: errorMsg,
                                    statusCode: statusCode
                                };
                            });
                        }
                    }
                }
            },

            CustomFile: {
                displayName: "Custom File",
                description: "Download any file from the configured base path",
                
                properties: {
                    fileName: {
                        displayName: "File Name",
                        type: "string",
                        required: true
                    },
                    content: {
                        displayName: "Content",
                        type: "string",
                        required: false
                    },
                    success: {
                        displayName: "Success",
                        type: "boolean",
                        required: false
                    },
                    errorMessage: {
                        displayName: "Error Message",
                        type: "string",
                        required: false
                    },
                    statusCode: {
                        displayName: "Status Code",
                        type: "number",
                        required: false
                    }
                },

                methods: {
                    DownloadFile: {
                        displayName: "Download File",
                        description: "Download any file from the configured base path",
                        type: "read",
                        
                        parameters: {
                            input: ["fileName"],
                            output: ["content", "success", "errorMessage", "statusCode"]
                        },

                        execute: function(inputs, context) {
                            var config = serviceProvider.configuration;
                            var host = config.host.value;
                            var basePath = config.basePath.value;
                            var apiVersion = config.apiVersion.value;
                            var fileName = inputs.fileName;

                            // Ensure fileName doesn't start with /
                            if (fileName.startsWith('/')) {
                                fileName = fileName.substring(1);
                            }

                            // Build URL
                            var url = "https://" + host + basePath + "/" + fileName;

                            // Get OAuth token from K2 context
                            var accessToken = context.auth.accessToken;

                            if (!accessToken) {
                                return Promise.resolve({
                                    fileName: inputs.fileName,
                                    content: "",
                                    success: false,
                                    errorMessage: "OAuth token not available. Please configure OAuth resource.",
                                    statusCode: 401
                                });
                            }

                            return $.ajax({
                                url: url,
                                method: "GET",
                                headers: {
                                    "Authorization": "Bearer " + accessToken,
                                    "Accept": "text/plain",
                                    "x-ms-version": apiVersion
                                },
                                dataType: "text"
                            }).then(function(response, textStatus, jqXHR) {
                                return {
                                    fileName: inputs.fileName,
                                    content: response,
                                    success: true,
                                    errorMessage: "",
                                    statusCode: jqXHR.status
                                };
                            }).catch(function(jqXHR, textStatus, errorThrown) {
                                var statusCode = jqXHR.status || 0;
                                var errorMsg = errorThrown || textStatus || "File not found";
                                
                                if (statusCode === 404) {
                                    errorMsg = "File not found";
                                } else if (statusCode === 401) {
                                    errorMsg = "Authentication failed: Unauthorized. Check OAuth configuration.";
                                } else if (statusCode === 403) {
                                    errorMsg = "Authentication failed: Forbidden. Check storage permissions.";
                                }

                                return {
                                    fileName: inputs.fileName,
                                    content: "",
                                    success: false,
                                    errorMessage: errorMsg,
                                    statusCode: statusCode
                                };
                            });
                        }
                    }
                }
            }
        },

        // Initialize the service provider
        initialize: function() {
            // Validation will be handled by K2's OAuth resource
            return true;
        }
    };

    // Return the service provider
    return serviceProvider;
})();
