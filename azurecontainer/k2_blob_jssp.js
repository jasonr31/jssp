metadata = {
  systemName: "com.k2.mrohstorage",
  displayName: "MROH File Download Broker",
  description: "A broker for downloading files from MROH Azure Blob Storage.",
  configuration: {
    "x-ms-version": {
      displayName: "Azure Storage API Version",
      type: "string",
      value: "2020-04-08"
    }
  }
};
const m = "https://mrohstoragetechrefdev01.blob.core.windows.net", y = "/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References", u = "file", p = "content", d = "fileName", a = "path", h = "download";
ondescribe = async function({ configuration: t }) {
  const o = {
    objects: {
      [u]: {
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
          [h]: {
            displayName: "Download File",
            type: "read",
            outputs: [p, d],
            parameters: {
              [a]: {
                displayName: "File Path",
                description: "Path to the file in blob storage",
                type: "string"
              }
            },
            requiredParameters: [a]
          }
        }
      }
    },
    // Expose service key properties so they appear in the K2 Service Instance UI.
    // K2 will surface these for users to set when creating a service instance.
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
  postSchema(o);
};
onexecute = async function({
  objectName: t,
  methodName: o,
  parameters: i,
  properties: e,
  configuration: r
}) {
  switch (t) {
    case u:
      await f(o, i, e, r);
      break;
    default:
      throw new Error("The object " + t + " is not supported.");
  }
};
async function f(t, o, i, e) {
  switch (t) {
    case h:
      await w(o, i, e);
      break;
    default:
      throw new Error("The method " + t + " is not supported.");
  }
}
function w(t, o, i) {
  return new Promise((e, r) => {
    if (typeof t[a] != "string")
      throw new Error('parameters["path"] is not of type string');
    t[a], v(t, o, i, (s, n) => {
      if (s) return r(s);
      postResult(n), e();
    });
  });
}
function v(t, o, i, e) {
  const r = t[a], s = `${m}${y}/${r}`;
  x(s, "", "GET", i, (n, c) => {
    if (n) return e(n);
    const l = r.includes("/") && r.split("/").pop() || r;
    e(null, {
      [p]: c,
      [d]: l
    });
  });
}
function x(t, o, i, e, r) {
  var s = new XMLHttpRequest();
  s.withCredentials = !0, s.onreadystatechange = function() {
    try {
      if (s.readyState !== 4) return;
      if (s.status !== 200)
        throw new Error("Failed with status " + s.status);
      r(null, s.responseText);
    } catch (l) {
      r(l);
    }
  }, s.open(i, t);
  let n;
  try {
    e && typeof e.xMsVersion == "string" ? n = e.xMsVersion : e && e.serviceKeyProperties && typeof e.serviceKeyProperties["x-ms-version"] == "string" ? n = e.serviceKeyProperties["x-ms-version"] : e && e.serviceProperties && typeof e.serviceProperties["x-ms-version"] == "string" && (n = e.serviceProperties["x-ms-version"]);
  } catch {
  }
  const c = n || "2020-04-08";
  s.setRequestHeader("x-ms-version", c), s.send(o);
}
//# sourceMappingURL=index.js.map
