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
const m = "https://mrohstoragetechrefdev01.blob.core.windows.net", f = "/mrohstoragetechrefdev01/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References", u = "file", p = "content", d = "fileName", a = "path", h = "download";
ondescribe = async function({ configuration: s }) {
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
  objectName: s,
  methodName: o,
  parameters: i,
  properties: e,
  configuration: r
}) {
  switch (s) {
    case u:
      await y(o, i, e, r);
      break;
    default:
      throw new Error("The object " + s + " is not supported.");
  }
};
async function y(s, o, i, e) {
  switch (s) {
    case h:
      await w(o, i, e);
      break;
    default:
      throw new Error("The method " + s + " is not supported.");
  }
}
function w(s, o, i) {
  return new Promise((e, r) => {
    if (typeof s[a] != "string")
      throw new Error('parameters["path"] is not of type string');
    s[a], v(s, o, i, (t, n) => {
      if (t) return r(t);
      postResult(n), e();
    });
  });
}
function v(s, o, i, e) {
  const r = s[a], t = `${m}${f}/${r}`;
  x(t, "", "GET", i, (n, l) => {
    if (n) return e(n);
    const c = r.includes("/") && r.split("/").pop() || r;
    console.log("URL: " + t), e(null, {
      [p]: l,
      [d]: c
    });
  });
}
function x(s, o, i, e, r) {
  var t = new XMLHttpRequest();
  t.withCredentials = !0, t.onreadystatechange = function() {
    try {
      if (t.readyState !== 4) return;
      if (t.status !== 200)
        throw new Error("Failed with status " + t.status);
      r(null, t.responseText);
    } catch (c) {
      r(c);
    }
  }, t.open(i, s);
  let n;
  try {
    e && typeof e.xMsVersion == "string" ? n = e.xMsVersion : e && e.serviceKeyProperties && typeof e.serviceKeyProperties["x-ms-version"] == "string" ? n = e.serviceKeyProperties["x-ms-version"] : e && e.serviceProperties && typeof e.serviceProperties["x-ms-version"] == "string" && (n = e.serviceProperties["x-ms-version"]);
  } catch {
  }
  const l = n || "2020-04-08";
  t.setRequestHeader("x-ms-version", l), console.log("Request Header: " + l), t.send(o), console.log("ExecuteRequest error:" + t.responseText);
}
