metadata = {
  systemName: "com.jde.orchestration",
  displayName: "JD Edwards Orchestration",
  description: "Call JD Edwards 9.2 orchestration REST APIs. Use K2 Static Credentials for authentication.",
  configuration: {
    baseURL: {
      displayName: "Base URL",
      type: "string",
      required: !0
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
onexecute = async function({ objectName: e, methodName: s, parameters: c, properties: t, configuration: r, schema: n }) {
  switch (e) {
    case "orchestration":
      await u(s, c, t, r);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function u(e, s, c, t) {
  switch (e) {
    case "addLineItem":
      await l(s);
      break;
    case "buildFullJSON":
      await d(s);
      break;
    case "callOrchestration":
      await g(s, t);
      break;
    case "validateJSON":
      await p(s);
      break;
    case "initializeEmptyArray":
      await S();
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function l(e) {
  return new Promise((s, c) => {
    try {
      let t = [];
      if (e.existingLinesJSON)
        try {
          const n = String(e.existingLinesJSON), o = JSON.parse(n);
          if (!Array.isArray(o))
            throw new Error("Existing lines JSON is not an array");
          t = o;
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
function d(e) {
  return new Promise((s, c) => {
    try {
      let t = [];
      if (e.linesArrayJSON)
        try {
          const i = String(e.linesArrayJSON), y = JSON.parse(i);
          if (!Array.isArray(y))
            throw new Error("Lines array JSON is not an array");
          t = y;
        } catch (i) {
          throw new Error("Invalid lines array JSON: " + (i instanceof Error ? i.message : String(i)));
        }
      const r = {};
      e.shan && (r.SHAN = String(e.shan)), e.vr01 && (r.VR01 = String(e.vr01)), e.vr02 && (r.VR02 = String(e.vr02)), e.drqj && (r.DRQJ = String(e.drqj)), t.length > 0 && (r.GridIn_1_3 = t);
      const n = e.prettyPrint, a = n && String(n).toLowerCase() === "true" ? JSON.stringify(r, null, 2) : JSON.stringify(r);
      postResult({
        requestJSON: a,
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
function g(e, s) {
  return new Promise((c, t) => {
    try {
      const r = s.baseURL;
      if (!r)
        throw new Error("Base URL is required in configuration");
      let n = String(r);
      n.endsWith("/") || (n += "/"), n += "jderest/v2/orchestrator/" + String(e.orchestrationName);
      const o = {};
      if (e.shan && (o.SHAN = String(e.shan)), e.vr01 && (o.VR01 = String(e.vr01)), e.vr02 && (o.VR02 = String(e.vr02)), e.drqj && (o.DRQJ = String(e.drqj)), e.gridInJSON)
        try {
          const i = String(e.gridInJSON);
          o.GridIn_1_3 = JSON.parse(i);
        } catch (i) {
          throw new Error("Invalid GridIn_JSON format: " + (i instanceof Error ? i.message : String(i)));
        }
      const a = new XMLHttpRequest();
      a.onreadystatechange = function() {
        try {
          if (a.readyState !== 4) return;
          const i = a.status >= 200 && a.status < 300;
          postResult({
            statusCode: a.status,
            responseBody: a.responseText,
            success: i,
            errorMessage: i ? "" : "HTTP " + a.status + ": " + a.statusText
          }), c();
        } catch (i) {
          t(i);
        }
      }, a.open("POST", n), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify(o));
    } catch (r) {
      postResult({
        statusCode: 0,
        responseBody: "",
        success: !1,
        errorMessage: r instanceof Error ? r.message : String(r)
      }), c();
    }
  });
}
function p(e) {
  return new Promise((s, c) => {
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
//# sourceMappingURL=jdedwardspricingorch.js.map
