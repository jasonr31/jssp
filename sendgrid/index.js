import "@k2oss/k2-broker-core";

metadata = {
    systemName: "com.k2.sendgrid",
    displayName: "SendGrid Mail Service",
    description: "A service broker for SendGrid's Mail API v3.",
    parameters: {
        "apiKey": {
            displayName: "API Key",
            description: "SendGrid API Key for authentication",
            type: "string",
            required: true
        }
    }
};

ondescribe = async function ({ configuration }): Promise<void> {
    postSchema({
        objects: {
            mail: {
                displayName: "Mail",
                description: "Send emails through SendGrid",
                properties: {
                    // Response properties
                    status: {
                        displayName: "Status",
                        description: "Send status",
                        type: "string"
                    },
                    // Input properties for mail send
                    from_email: {
                        displayName: "From Email",
                        description: "Sender email address",
                        type: "string"
                    },
                    from_name: {
                        displayName: "From Name",
                        description: "Sender name",
                        type: "string"
                    },
                    to_email: {
                        displayName: "To Email",
                        description: "Recipient email address",
                        type: "string"
                    },
                    to_name: {
                        displayName: "To Name",
                        description: "Recipient name",
                        type: "string"
                    },
                    subject: {
                        displayName: "Subject",
                        description: "Email subject",
                        type: "string"
                    },
                    content: {
                        displayName: "Content",
                        description: "Email content (HTML)",
                        type: "string"
                    }
                },
                methods: {
                    send: {
                        displayName: "Send Email",
                        type: "execute",
                        inputs: ["from_email", "from_name", "to_email", "to_name", "subject", "content"],
                        outputs: ["status"]
                    }
                }
            },
            batch: {
                displayName: "Batch",
                description: "Manage email batch operations",
                properties: {
                    batch_id: {
                        displayName: "Batch ID",
                        description: "The batch identifier",
                        type: "string"
                    },
                    status: {
                        displayName: "Status",
                        description: "Batch operation status",
                        type: "string"
                    }
                },
                methods: {
                    create: {
                        displayName: "Create Batch",
                        type: "create",
                        outputs: ["batch_id", "status"]
                    },
                    validate: {
                        displayName: "Validate Batch",
                        type: "read",
                        inputs: ["batch_id"],
                        outputs: ["status"]
                    }
                }
            }
        }
    });
};

onexecute = async function ({
    objectName,
    methodName,
    parameters,
    properties,
    configuration,
    schema
}): Promise<void> {
    switch (objectName) {
        case "mail":
            await onexecuteMail(methodName, properties, configuration);
            break;
        case "batch":
            await onexecuteBatch(methodName, properties, configuration);
            break;
        default:
            throw new Error("The object " + objectName + " is not supported.");
    }
};

async function onexecuteMail(methodName: string, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "send":
            await sendMail(properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}

async function onexecuteBatch(methodName: string, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "create":
            await createBatch(configuration);
            break;
        case "validate":
            await validateBatch(properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}

function sendMail(properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (!configuration["apiKey"]) throw new Error("API Key not provided in configuration");

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status === 202) {
                    postResult({
                        status: "success"
                    });
                    resolve();
                } else {
                    throw new Error("Failed with status " + xhr.status);
                }
            } catch (e) {
                reject(e);
            }
        };

        const payload = {
            personalizations: [{
                to: [{
                    email: properties["to_email"],
                    name: properties["to_name"]
                }]
            }],
            from: {
                email: properties["from_email"],
                name: properties["from_name"]
            },
            subject: properties["subject"],
            content: [{
                type: "text/html",
                value: properties["content"]
            }]
        };

        xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
        xhr.setRequestHeader("Authorization", `Bearer ${configuration["apiKey"]}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(payload));
    });
}

function createBatch(configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (!configuration["apiKey"]) throw new Error("API Key not provided in configuration");

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status === 201) {
                    const response = JSON.parse(xhr.responseText);
                    postResult({
                        batch_id: response.batch_id,
                        status: "created"
                    });
                    resolve();
                } else {
                    throw new Error("Failed with status " + xhr.status);
                }
            } catch (e) {
                reject(e);
            }
        };

        xhr.open("POST", "https://api.sendgrid.com/v3/mail/batch");
        xhr.setRequestHeader("Authorization", `Bearer ${configuration["apiKey"]}`);
        xhr.send();
    });
}

function validateBatch(properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (!configuration["apiKey"]) throw new Error("API Key not provided in configuration");
        if (!properties["batch_id"]) throw new Error("Batch ID is required");

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status === 200) {
                    postResult({
                        batch_id: properties["batch_id"],
                        status: "valid"
                    });
                    resolve();
                } else {
                    throw new Error("Failed with status " + xhr.status);
                }
            } catch (e) {
                reject(e);
            }
        };

        xhr.open("GET", `https://api.sendgrid.com/v3/mail/batch/${encodeURIComponent(properties["batch_id"])}`);
        xhr.setRequestHeader("Authorization", `Bearer ${configuration["apiKey"]}`);
        xhr.send();
    });
}
