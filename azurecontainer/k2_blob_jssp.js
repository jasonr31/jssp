metadata = {
  systemName: "com.k2.mrohstorage",
  displayName: "MROH File Download Broker",
  description: "A broker for downloading files from MROH Azure Blob Storage.",
  configuration: {
    "storageAccountUrl": {
      displayName: "Storage Account URL",
      type: "string",
      value: "https://mrohstoragetechrefdev01.blob.core.windows.net"
    },
    "containerPath": {
      displayName: "Container Path",
      type: "string",
      value: "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References"
    },
    "x-ms-version": {
      displayName: "Azure Storage API Version",
      type: "string",
      value: "2020-04-08"
    }
  }
};

ondescribe = async function({ configuration }) {
  postSchema({
    objects: {
      file: {
        displayName: "File",
        description: "Download file content from Azure Blob Storage",
        properties: {
          content: {
            displayName: "File Content",
            type: "string"
          },
          fileName: {
            displayName: "File Name",
            type: "string"
          }
        },
        methods: {
          download: {
            displayName: "Download File",
            type: "read",
            outputs: ["content", "fileName"],
            parameters: {
              path: {
                displayName: "File Path",
                description: "Path to the file in blob storage",
                type: "string"
              }
            },
            requiredParameters: ["path"]
          }
        }
      }
    }
  });
};

onexecute = async function({
  objectName,
  methodName,
  parameters,
  properties,
  configuration
}) {
  switch (objectName) {
    case "file":
      await handleFileObject(methodName, parameters, properties, configuration);
      break;
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};

async function handleFileObject(methodName, parameters, properties, configuration) {
  switch (methodName) {
    case "download":
      await downloadFile(parameters, properties, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

async function downloadFile(parameters, properties, configuration) {
  if (typeof parameters.path !== "string") {
    throw new Error('parameters["path"] is not of type string');
  }

  const storageUrl = configuration.storageAccountUrl || "https://mrohstoragetechrefdev01.blob.core.windows.net";
  const containerPath = configuration.containerPath || "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References";
  const filePath = parameters.path;
  const fullUrl = storageUrl + containerPath + "/" + filePath;
  
  // Get API version from configuration
  const apiVersion = configuration["x-ms-version"] || "2020-04-08";
  
  try {
    // Use K2's HTTP request capabilities
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "x-ms-version": apiVersion
      }
    });
    
    if (!response.ok) {
      throw new Error("Failed to download file: " + response.status + " " + response.statusText);
    }
    
    const content = await response.text();
    
    // Extract filename from path
    const fileName = filePath.includes("/") ? filePath.split("/").pop() : filePath;
    
    postResult({
      content: content,
      fileName: fileName
    });
    
  } catch (error) {
    throw new Error("Error downloading file: " + error.message);
  }
}
