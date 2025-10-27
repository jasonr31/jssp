metadata = {
    systemName: "com.k2.mrohstorage",
    displayName: "MROH File Download Broker",
    description: "A broker for downloading files from MROH Azure Blob Storage.",
    serviceAuthentication: {
        type: "OAuth",
        resource: "Azure Blob Files MROH - Client"
    },
    configuration: {
        "x-ms-version": {
            displayName: "Azure Storage API Version",
            description: "Override the x-ms-version header sent to Azure Blob Storage",
            type: "string",
            default: "2020-04-08"
        }
    }
};

const baseUri = "https://mrohstoragetechrefdev01.blob.core.windows.net";
const basePath = "/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References";

const File = "file";
const FileContent = "content";
const FileName = "fileName";
const FilePath = "path";
const FileDownload = "download";

ondescribe = async function ({ configuration }) {
    const schema = {
        objects: {
            [File]: {
                displayName: "File",
                description: "Download files from Azure Blob Storage",
                properties: {
                    [FileContent]: {
                        displayName: "File Content",
                        type: "string"
                    },
                    [FileName]: {
                        displayName: "File Name",
                        type: "string"
                    }
                },
                methods: {
                    [FileDownload]: {
                        displayName: "Download File",
                        type: "read",
                        outputs: [FileContent, FileName],
                        parameters: {
                            [FilePath]: {
                                displayName: "File Path",
                                description: "Path to the file in blob storage",
                                type: "string"
                            }
                        },
                        requiredParameters: [FilePath]
                    }
                }
            }
        }
    };

    postSchema(schema);
};

onexecute = async function ({ objectName, methodName, parameters, properties, configuration }) {
    switch (objectName) {
        case File:
            await onexecuteFile(methodName, parameters, properties, configuration);
            break;
        default:
            throw new Error("The object " + objectName + " is not supported.");
    }
};

async function onexecuteFile(methodName, parameters, properties, configuration) {
    switch (methodName) {
        case FileDownload:
            await onexecuteFileDownload(parameters, properties, configuration);
            break;
        default:
            throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteFileDownload(parameters, properties, configuration) {
    return new Promise((resolve, reject) => {
        if (typeof parameters[FilePath] !== "string") {
            throw new Error('parameters["path"] is not of type string');
        }

        const filePath = parameters[FilePath];
        DownloadFile(parameters, properties, configuration, (error, result) => {
            if (error) return reject(error);
            postResult(result);
            resolve();
        });
    });
}

function DownloadFile(parameters, properties, configuration, cb) {
    const filePath = parameters[FilePath];
    const url = `${baseUri}${basePath}/${filePath}`;

    ExecuteRequest(url, "", "GET", configuration, (error, responseText) => {
        if (error) return cb(error);

        const fileName = filePath.includes('/') ? filePath.split('/').pop() || filePath : filePath;

        cb(null, {
            [FileContent]: responseText,
            [FileName]: fileName
        });
    });
}

function ExecuteRequest(url, data, requestType, configuration, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 200) {
                throw new Error("Failed with status " + xhr.status);
            }

            cb(null, xhr.responseText);
        } catch (e) {
            cb(e);
        }
    };

    xhr.open(requestType, url);

    let xMsVersion;
    try {
        if (configuration && typeof configuration["x-ms-version"] === "string") {
            xMsVersion = configuration["x-ms-version"];
        }
    } catch (e) {
        // ignore and fall back to default
    }

    const headerValue = xMsVersion || "2020-04-08";
    xhr.setRequestHeader("x-ms-version", headerValue);

    xhr.send(data);
}
