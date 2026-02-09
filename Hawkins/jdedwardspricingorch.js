metadata = {
  systemName: "com.jde.orchestration",
  displayName: "JD Edwards Orchestration",
  description: "Call JD Edwards 9.2 orchestration REST APIs using Basic Authentication (username/password).",
  configuration: {
    baseURL: {
      displayName: "Base URL",
      type: "string",
      required: !0
    },
    username: {
      displayName: "Username",
      type: "string",
      required: !0
    },
    password: {
      displayName: "Password",
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
            outputs: ["statusCode", "responseBody", "success", "errorMessage", "requestJSON"]
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
onexecute = async function({ objectName: e, methodName: t, parameters: a, properties: s, configuration: r, schema: n }) {
  switch (e) {
    case "orchestration":
      await p(t, a, s, r);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function p(e, t, a, s) {
  switch (e) {
    case "addLineItem":
      await S(t);
      break;
    case "buildFullJSON":
      await N(t);
      break;
    case "callOrchestration":
      await O(t, s);
      break;
    case "validateJSON":
      await J(t);
      break;
    case "initializeEmptyArray":
      await h();
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function S(e) {
  return new Promise((t, a) => {
    try {
      let s = [];
      if (e.existingLinesJSON)
        try {
          const n = String(e.existingLinesJSON), o = JSON.parse(n);
          if (!Array.isArray(o))
            throw new Error("Existing lines JSON is not an array");
          s = o;
        } catch (n) {
          throw new Error("Invalid existing lines JSON: " + (n instanceof Error ? n.message : String(n)));
        }
      const r = {};
      e.addj && (r.ADDJ = String(e.addj)), e.lnty && (r.LNTY = String(e.lnty)), e.uorg && (r.UORG = String(e.uorg)), e.uom && (r.UOM = String(e.uom)), e.litm && (r.LITM = String(e.litm)), e.uprc && (r.UPRC = String(e.uprc)), e.uom4 && (r.UOM4 = String(e.uom4)), s.push(r), postResult({
        linesArrayJSON: JSON.stringify(s),
        lineCount: s.length,
        success: !0,
        errorMessage: ""
      }), t();
    } catch (s) {
      postResult({
        linesArrayJSON: "",
        lineCount: 0,
        success: !1,
        errorMessage: s instanceof Error ? s.message : String(s)
      }), t();
    }
  });
}
function N(e) {
  return new Promise((t, a) => {
    try {
      let s = [];
      if (e.linesArrayJSON)
        try {
          const i = String(e.linesArrayJSON), l = JSON.parse(i);
          if (!Array.isArray(l))
            throw new Error("Lines array JSON is not an array");
          s = l;
        } catch (i) {
          throw new Error("Invalid lines array JSON: " + (i instanceof Error ? i.message : String(i)));
        }
      const r = {};
      e.shan && (r.SHAN = String(e.shan)), e.vr01 && (r.VR01 = String(e.vr01)), e.vr02 && (r.VR02 = String(e.vr02)), e.drqj && (r.DRQJ = String(e.drqj)), s.length > 0 && (r.GridIn_1_3 = s);
      const n = e.prettyPrint, u = n && String(n).toLowerCase() === "true" ? JSON.stringify(r, null, 2) : JSON.stringify(r);
      postResult({
        requestJSON: u,
        success: !0,
        errorMessage: "",
        lineCount: s.length
      }), t();
    } catch (s) {
      postResult({
        requestJSON: "",
        success: !1,
        errorMessage: s instanceof Error ? s.message : String(s),
        lineCount: 0
      }), t();
    }
  });
}
function O(e, t) {
  return new Promise((a, s) => {
    try {
      const r = t.baseURL;
      if (!r)
        throw new Error("Base URL is required in configuration");
      let n = String(r);
      n.endsWith("/") || (n += "/"), n += String(e.orchestrationName);
      const o = {};
      if (e.shan && (o.SHAN = String(e.shan)), e.vr01 && (o.VR01 = String(e.vr01)), e.vr02 && (o.VR02 = String(e.vr02)), e.drqj && (o.DRQJ = String(e.drqj)), e.gridInJSON)
        try {
          const c = String(e.gridInJSON);
          o.GridIn_1_3 = JSON.parse(c);
        } catch (c) {
          throw new Error("Invalid GridIn_JSON format: " + (c instanceof Error ? c.message : String(c)));
        }
      const u = JSON.stringify(o, null, 2), i = new XMLHttpRequest();
      i.onreadystatechange = function() {
        try {
          if (i.readyState !== 4) return;
          const c = i.status >= 200 && i.status < 300;
          let y = "";
          if (!c) {
            y = "HTTP " + i.status + ": " + i.statusText;
            try {
              const d = JSON.parse(i.responseText);
              d.errorMessage ? y = d.errorMessage : d.message ? y = d.message : d.error && (y = d.error);
            } catch {
              i.responseText && i.responseText.trim() !== "" && (y = i.responseText);
            }
          }
          postResult({
            statusCode: i.status,
            responseBody: i.responseText,
            success: c,
            errorMessage: y,
            requestJSON: u
          }), a();
        } catch (c) {
          s(c);
        }
      }, i.open("POST", n), i.setRequestHeader("Content-Type", "application/json");
      const l = t.username, g = t.password;
      if (l && g) {
        const c = String(l).trim() + ":" + String(g).trim(), y = m(c);
        i.setRequestHeader("Authorization", "Basic " + y);
      } else
        throw new Error("Username and Password are required in configuration");
      i.send(JSON.stringify(o));
    } catch (r) {
      postResult({
        statusCode: 0,
        responseBody: "",
        success: !1,
        errorMessage: r instanceof Error ? r.message : String(r),
        requestJSON: ""
      }), a();
    }
  });
}
function J(e) {
  return new Promise((t, a) => {
    try {
      const s = String(e.jsonString), r = JSON.parse(s);
      postResult({
        success: !0,
        errorMessage: "",
        requestJSON: JSON.stringify(r, null, 2)
      }), t();
    } catch (s) {
      postResult({
        success: !1,
        errorMessage: s instanceof Error ? s.message : String(s),
        requestJSON: ""
      }), t();
    }
  });
}
function h() {
  return new Promise((e, t) => {
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
function m(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let a = "";
  for (let s = 0; s < e.length; s += 3) {
    const r = e.charCodeAt(s), n = s + 1 < e.length ? e.charCodeAt(s + 1) : 0, o = s + 2 < e.length ? e.charCodeAt(s + 2) : 0, u = r << 16 | n << 8 | o;
    a += t[u >> 18 & 63], a += t[u >> 12 & 63], a += t[s + 1 < e.length ? u >> 6 & 63 : 64], a += t[s + 2 < e.length ? u & 63 : 64];
  }
  return a;
}
//# sourceMappingURL=jdedwardspricingorch.js.map
