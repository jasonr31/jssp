metadata = {
  systemName: "com.k2.mrohstorage",
  displayName: "MROH File Download Broker",
  description: "A broker for downloading files from MROH Azure Blob Storage.",
  configuration: {
    storageAccountUrl: {
      displayName: "Storage Account URL",
      type: "string",
      value: "https://mrohstoragetechrefdev01.blob.core.windows.net"
    },
    containerPath: {
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
const h = "file", p = "content", d = "fileName", l = "path", m = "download";
ondescribe = async function({ configuration: s }) {
  const i = {
    objects: {
      [h]: {
        displayName: "File",
        description: "Download file content from Azure Blob Storage",
        properties: {
          [p]: {
            displayName: "File Content",
            type: "string"
          },
          [d]: {
            displayName: "File Name",
            type: "string"
          }
        },
        methods: {
          [m]: {
            displayName: "Download File",
            type: "read",
            outputs: [p, d],
            parameters: {
              [l]: {
                displayName: "File Path",
                description: "Path to the file in blob storage",
                type: "string"
              }
            },
            requiredParameters: [l]
          }
        }
      }
    },
    // Expose service key properties so they appear in the K2 Service Instance UI.
    configuration: {
      serviceKeyProperties: {
        "x-ms-version": {
          displayName: "Azure Storage API Version (x-ms-version)",
          description: "Optional override for the x-ms-version header sent to Azure Storage",
          type: "string",
          default: "2020-04-08"
        }
      }
    }
  };
  postSchema(i);
};
onexecute = async function({
  objectName: s,
  methodName: i,
  parameters: r,
  properties: e,
  configuration: o
}) {
  switch (s) {
    case h:
      await f(i, r, e, o);
      break;
    default:
      throw new Error("The object " + s + " is not supported.");
  }
};
async function f(s, i, r, e) {
  switch (s) {
    case m:
      await v(i, r, e);
      break;
    default:
      throw new Error("The method " + s + " is not supported.");
  }
}
function v(s, i, r) {
  return new Promise((e, o) => {
    if (typeof s[l] != "string") {
      o(new Error('parameters["path"] is not of type string'));
      return;
    }
    w(s, i, r, (t, n) => {
      if (t) return o(t);
      postResult(n), e();
    });
  });
}
function w(s, i, r, e) {
  const o = s[l], t = r && r.storageAccountUrl || "https://mrohstoragetechrefdev01.blob.core.windows.net", n = r && r.containerPath || "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References", c = `${t}${n}/${o}`;
  x(c, "", "GET", r, (a, y) => {
    if (a) return e(a);
    const u = o.includes("/") && o.split("/").pop() || o;
    e(null, {
      [p]: y,
      [d]: u
    });
  });
}
function x(s, i, r, e, o) {
  var t = new XMLHttpRequest();
  t.withCredentials = !0, t.onreadystatechange = function() {
    try {
      if (t.readyState !== 4) return;
      if (t.status !== 200)
        throw new Error("Failed with status " + t.status + ": " + t.statusText);
      o(null, t.responseText);
    } catch (a) {
      o(a);
    }
  }, t.open(r, s);
  let n;
  try {
    e && typeof e.xMsVersion == "string" ? n = e.xMsVersion : e && typeof e["x-ms-version"] == "string" ? n = e["x-ms-version"] : e && e.serviceKeyProperties && typeof e.serviceKeyProperties["x-ms-version"] == "string" ? n = e.serviceKeyProperties["x-ms-version"] : e && e.serviceProperties && typeof e.serviceProperties["x-ms-version"] == "string" && (n = e.serviceProperties["x-ms-version"]);
  } catch {
  }
  const c = n || "2020-04-08";
  t.setRequestHeader("x-ms-version", c), t.send(i);
}
//# sourceMappingURL=BlobFileDownloadBroker.js.map
