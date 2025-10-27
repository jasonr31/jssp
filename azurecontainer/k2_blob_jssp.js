const y = "https://mrohstoragetechrefdev01.blob.core.windows.net", f = "/Technical%20Reference/Work%20Orders/2025-298/2025-0394872/References", u = "file", p = "content", d = "fileName", a = "path", h = "download";
ondescribe = async function({ configuration: t }) {
  const o = {
    objects: {
      [u]: {
        displayName: "File",
        description: "Download files from Azure Blob Storage",
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
    configuration: {
      serviceKeyProperties: {
        "x-ms-version": {
          displayName: "Azure Storage API Version",
          description: "Override the x-ms-version header sent to Azure Blob Storage",
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
  configuration: s
}) {
  switch (t) {
    case u:
      await m(o, i, e, s);
      break;
    default:
      throw new Error("The object " + t + " is not supported.");
  }
};
async function m(t, o, i, e) {
  switch (t) {
    case h:
      await w(o, i, e);
      break;
    default:
      throw new Error("The method " + t + " is not supported.");
  }
}
function w(t, o, i) {
  return new Promise((e, s) => {
    if (typeof t[a] != "string") {
      s(new Error('parameters["path"] is not of type string'));
      return;
    }
    t[a], v(t, o, i, (r, n) => {
      if (r) {
        s(r);
        return;
      }
      postResult(n), e();
    });
  });
}
function v(t, o, i, e) {
  const s = t[a], r = `${y}${f}/${s}`;
  x(r, "", "GET", i, (n, c) => {
    if (n) {
      e(n);
      return;
    }
    const l = s.includes("/") && s.split("/").pop() || s;
    e(null, {
      [p]: c,
      [d]: l
    });
  });
}
function x(t, o, i, e, s) {
  const r = new XMLHttpRequest();
  r.onreadystatechange = function() {
    try {
      if (r.readyState !== 4) return;
      if (r.status !== 200)
        throw new Error("Failed with status " + r.status);
      s(null, r.responseText);
    } catch (l) {
      s(l);
    }
  }, r.open(i, t);
  let n;
  try {
    e && typeof e.xMsVersion == "string" ? n = e.xMsVersion : e && e.serviceKeyProperties && typeof e.serviceKeyProperties["x-ms-version"] == "string" ? n = e.serviceKeyProperties["x-ms-version"] : e && e.serviceProperties && typeof e.serviceProperties["x-ms-version"] == "string" && (n = e.serviceProperties["x-ms-version"]);
  } catch {
  }
  const c = n || "2020-04-08";
  r.setRequestHeader("x-ms-version", c), r.send(o);
}
//# sourceMappingURL=index.js.map
