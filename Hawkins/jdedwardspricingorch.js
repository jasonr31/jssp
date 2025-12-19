metadata = {
  systemName: "com.jde.orchestration",
  displayName: "JD Edwards Orchestration",
  description: "Call JD Edwards 9.2 orchestration REST APIs with Basic or Bearer token authentication.",
  configuration: {
    baseURL: {
      displayName: "Base URL",
      type: "string",
      required: !0
    },
    authType: {
      displayName: "Authentication Type",
      type: "string",
      value: "Basic"
    },
    username: {
      displayName: "Username",
      type: "string"
    },
    password: {
      displayName: "Password",
      type: "string"
    },
    bearerToken: {
      displayName: "Bearer Token",
      type: "string"
    }
  }
};
ondescribe = async function({ configuration: e }) {
  postSchema({
    objects: {
      orchestration: {
        displayName: "Orchestration",
        description: "Call JD Edwards orchestrations",
        properties: {
          statusCode: { displayName: "Status Code", type: "number" },
          responseBody: { displayName: "Response Body", type: "string" },
          success: { displayName: "Success", type: "boolean" },
          errorMessage: { displayName: "Error Message", type: "string" },
          lineCount: { displayName: "Line Count", type: "number" },
          requestJSON: { displayName: "Request JSON", type: "string" },
          linesArrayJSON: { displayName: "Lines Array JSON", type: "string" }
        },
        methods: {
          addLineItem: {
            displayName: "Add Line Item",
            type: "read",
            parameters: {
              existingLinesJSON: { displayName: "Existing Lines JSON", type: "string" },
              addj: { displayName: "Date (ADDJ)", type: "string" },
              lnty: { displayName: "Line Type (LNTY)", type: "string" },
              uorg: { displayName: "Quantity (UORG)", type: "string" },
              uom: { displayName: "UOM", type: "string" },
              litm: { displayName: "Item (LITM)", type: "string" },
              uprc: { displayName: "Unit Price (UPRC)", type: "string" },
              uom4: { displayName: "UOM4", type: "string" }
            },
            requiredParameters: [],
            outputs: ["linesArrayJSON", "lineCount", "success", "errorMessage"]
          },
          buildFullJSON: {
            displayName: "Build Full JSON",
            type: "read",
            parameters: {
              linesArrayJSON: { displayName: "Lines Array JSON", type: "string" },
              shan: { displayName: "Ship To (SHAN)", type: "string" },
              vr01: { displayName: "Customer PO (VR01)", type: "string" },
              vr02: { displayName: "VR02", type: "string" },
              drqj: { displayName: "Requested Date (DRQJ)", type: "string" },
              prettyPrint: { displayName: "Pretty Print", type: "string" }
            },
            requiredParameters: ["linesArrayJSON"],
            outputs: ["requestJSON", "success", "errorMessage", "lineCount"]
          },
          callOrchestration: {
            displayName: "Call Orchestration",
            type: "execute",
            parameters: {
              orchestrationName: { displayName: "Orchestration Name", type: "string" },
              shan: { displayName: "Ship To (SHAN)", type: "string" },
              vr01: { displayName: "Customer PO (VR01)", type: "string" },
              vr02: { displayName: "VR02", type: "string" },
              drqj: { displayName: "Requested Date (DRQJ)", type: "string" },
              gridInJSON: { displayName: "Grid Input (JSON)", type: "string" }
            },
            requiredParameters: ["orchestrationName"],
            outputs: ["statusCode", "responseBody", "success", "errorMessage"]
          },
          validateJSON: {
            displayName: "Validate JSON",
            type: "read",
            parameters: {
              jsonString: { displayName: "JSON String", type: "string" }
            },
            requiredParameters: ["jsonString"],
            outputs: ["success", "errorMessage", "requestJSON"]
          },
          initializeEmptyArray: {
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
onexecute = async function({ objectName: e, methodName: s, parameters: a, properties: t, configuration: r, schema: n }) {
  switch (e) {
    case "orchestration":
      await y(s, a, t, r);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function y(e, s, a, t) {
  switch (e) {
    case "addLineItem":
      await d(s);
      break;
    case "buildFullJSON":
      await l(s);
      break;
    case "callOrchestration":
      await p(s, t);
      break;
    case "validateJSON":
      await g(s);
      break;
    case "initializeEmptyArray":
      await S();
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function d(e) {
  return new Promise((s, a) => {
    try {
      let t = [];
      if (e.existingLinesJSON)
        try {
          const n = String(e.existingLinesJSON), c = JSON.parse(n);
          if (!Array.isArray(c))
            throw new Error("Existing lines JSON is not an array");
          t = c;
        } catch (n) {
          throw new Error("Invalid existing lines JSON: " + (n instanceof Error ? n.message : String(n)));
        }
      const r = {};
      e.addj && (r.ADDJ = String(e.addj)), e.lnty && (r.LNTY = String(e.lnty)), e.uorg && (r.UORG = String(e.uorg)), e.uom && (r.UOM = String(e.uom)), e.litm && (r.LITM = String(e.litm)), e.uprc && (r.UPRC = String(e.uprc)), e.uom4 && (r.UOM4 = String(e.uom4)), t.push(r), postResult({
        linesArrayJSON: JSON.stringify(t),
        lineCount: t.length,
        success: !0,
        errorMessage: ""
      }), s();
    } catch (t) {
      postResult({
        linesArrayJSON: "",
        lineCount: 0,
        success: !1,
        errorMessage: t instanceof Error ? t.message : String(t)
      }), s();
    }
  });
}
function l(e) {
  return new Promise((s, a) => {
    try {
      let t = [];
      if (e.linesArrayJSON)
        try {
          const i = String(e.linesArrayJSON), o = JSON.parse(i);
          if (!Array.isArray(o))
            throw new Error("Lines array JSON is not an array");
          t = o;
        } catch (i) {
          throw new Error("Invalid lines array JSON: " + (i instanceof Error ? i.message : String(i)));
        }
      const r = {};
      e.shan && (r.SHAN = String(e.shan)), e.vr01 && (r.VR01 = String(e.vr01)), e.vr02 && (r.VR02 = String(e.vr02)), e.drqj && (r.DRQJ = String(e.drqj)), t.length > 0 && (r.GridIn_1_3 = t);
      const n = e.prettyPrint, u = n && String(n).toLowerCase() === "true" ? JSON.stringify(r, null, 2) : JSON.stringify(r);
      postResult({
        requestJSON: u,
        success: !0,
        errorMessage: "",
        lineCount: t.length
      }), s();
    } catch (t) {
      postResult({
        requestJSON: "",
        success: !1,
        errorMessage: t instanceof Error ? t.message : String(t),
        lineCount: 0
      }), s();
    }
  });
}
function p(e, s) {
  return new Promise((a, t) => {
    try {
      const r = s.baseURL;
      if (!r)
        throw new Error("Base URL is required in configuration");
      let n = String(r);
      n.endsWith("/") || (n += "/"), n += "jderest/v2/orchestrator/" + String(e.orchestrationName);
      const c = {};
      if (e.shan && (c.SHAN = String(e.shan)), e.vr01 && (c.VR01 = String(e.vr01)), e.vr02 && (c.VR02 = String(e.vr02)), e.drqj && (c.DRQJ = String(e.drqj)), e.gridInJSON)
        try {
          const o = String(e.gridInJSON);
          c.GridIn_1_3 = JSON.parse(o);
        } catch (o) {
          throw new Error("Invalid GridIn_JSON format: " + (o instanceof Error ? o.message : String(o)));
        }
      const u = N(s), i = new XMLHttpRequest();
      i.onreadystatechange = function() {
        try {
          if (i.readyState !== 4) return;
          const o = i.status >= 200 && i.status < 300;
          postResult({
            statusCode: i.status,
            responseBody: i.responseText,
            success: o,
            errorMessage: o ? "" : "HTTP " + i.status + ": " + i.statusText
          }), a();
        } catch (o) {
          t(o);
        }
      }, i.open("POST", n), i.setRequestHeader("Content-Type", "application/json"), i.setRequestHeader("Authorization", u), i.send(JSON.stringify(c));
    } catch (r) {
      postResult({
        statusCode: 0,
        responseBody: "",
        success: !1,
        errorMessage: r instanceof Error ? r.message : String(r)
      }), a();
    }
  });
}
function g(e) {
  return new Promise((s, a) => {
    try {
      const t = String(e.jsonString), r = JSON.parse(t);
      postResult({
        success: !0,
        errorMessage: "",
        requestJSON: JSON.stringify(r, null, 2)
      }), s();
    } catch (t) {
      postResult({
        success: !1,
        errorMessage: t instanceof Error ? t.message : String(t),
        requestJSON: ""
      }), s();
    }
  });
}
function S() {
  return new Promise((e, s) => {
    try {
      postResult({
        linesArrayJSON: "[]",
        success: !0
      }), e();
    } catch {
      postResult({
        linesArrayJSON: "[]",
        success: !1
      }), e();
    }
  });
}
function N(e) {
  const s = e.authType || "Basic";
  if (String(s).toLowerCase() === "bearer") {
    const t = e.bearerToken;
    if (!t)
      throw new Error("Bearer token is required when AuthType is Bearer");
    return "Bearer " + String(t);
  } else {
    const t = e.username, r = e.password;
    if (!t || !r)
      throw new Error("Username and Password are required when AuthType is Basic");
    return "Basic " + h(String(t) + ":" + String(r));
  }
}
function h(e) {
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let a = "";
  for (let t = 0; t < e.length; t += 3) {
    const r = e.charCodeAt(t), n = t + 1 < e.length ? e.charCodeAt(t + 1) : 0, c = t + 2 < e.length ? e.charCodeAt(t + 2) : 0, u = r << 16 | n << 8 | c;
    a += s[u >> 18 & 63], a += s[u >> 12 & 63], a += s[t + 1 < e.length ? u >> 6 & 63 : 64], a += s[t + 2 < e.length ? u & 63 : 64];
  }
  return a;
}
//# sourceMappingURL=jdedwardspricingorch.js.map
