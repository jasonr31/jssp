metadata = {
  systemName: "com.jde.jsonbuilder",
  displayName: "JD Edwards JSON Builder",
  description: "Build JD Edwards orchestration JSON without calling the API. Stateless design for workflow variables.",
  configuration: {}
};
ondescribe = async function({ configuration: e }) {
  postSchema({
    objects: {
      jsonBuilder: {
        displayName: "JSON Builder",
        description: "Build JD Edwards orchestration JSON for testing",
        properties: {
          linesArrayJSON: {
            displayName: "Lines Array JSON",
            type: "string"
          },
          lineCount: {
            displayName: "Line Count",
            type: "number"
          },
          success: {
            displayName: "Success",
            type: "boolean"
          },
          errorMessage: {
            displayName: "Error Message",
            type: "string"
          },
          requestJSON: {
            displayName: "Request JSON",
            type: "string"
          },
          isValid: {
            displayName: "Is Valid",
            type: "boolean"
          },
          parsedJSON: {
            displayName: "Parsed JSON",
            type: "string"
          }
        },
        methods: {
          createLineItem: {
            displayName: "Create Line Item JSON",
            type: "read",
            parameters: {
              addj: { displayName: "Date (ADDJ)", type: "string" },
              lnty: { displayName: "Line Type (LNTY)", type: "string" },
              uorg: { displayName: "Quantity (UORG)", type: "string" },
              uom: { displayName: "UOM", type: "string" },
              litm: { displayName: "Item (LITM)", type: "string" },
              uprc: { displayName: "Unit Price (UPRC)", type: "string" },
              uom4: { displayName: "UOM4", type: "string" }
            },
            requiredParameters: [],
            outputs: ["linesArrayJSON", "success", "errorMessage"]
          },
          appendLineItem: {
            displayName: "Append Line Item",
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
          validateJSON: {
            displayName: "Validate JSON",
            type: "read",
            parameters: {
              jsonString: { displayName: "JSON String", type: "string" }
            },
            requiredParameters: ["jsonString"],
            outputs: ["isValid", "errorMessage", "parsedJSON"]
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
onexecute = async function({ objectName: e, methodName: t, parameters: n, properties: i, configuration: r, schema: s }) {
  switch (e) {
    case "jsonBuilder":
      await l(t, n);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function l(e, t, n, i) {
  switch (e) {
    case "createLineItem":
      await y(t);
      break;
    case "appendLineItem":
      await u(t);
      break;
    case "buildFullJSON":
      await d(t);
      break;
    case "validateJSON":
      await c(t);
      break;
    case "initializeEmptyArray":
      await p();
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function y(e) {
  return new Promise((t, n) => {
    try {
      const i = {};
      e.addj && (i.ADDJ = e.addj), e.lnty && (i.LNTY = e.lnty), e.uorg && (i.UORG = e.uorg), e.uom && (i.UOM = e.uom), e.litm && (i.LITM = e.litm), e.uprc && (i.UPRC = e.uprc), e.uom4 && (i.UOM4 = e.uom4);
      const r = [i];
      postResult({
        linesArrayJSON: JSON.stringify(r),
        success: !0,
        errorMessage: ""
      }), t();
    } catch (i) {
      postResult({
        linesArrayJSON: "",
        success: !1,
        errorMessage: i instanceof Error ? i.message : String(i)
      }), t();
    }
  });
}
function u(e) {
  return new Promise((t, n) => {
    try {
      let i = [];
      if (e.existingLinesJSON)
        try {
          const s = JSON.parse(e.existingLinesJSON);
          if (!Array.isArray(s))
            throw new Error("Existing lines JSON is not an array");
          i = s;
        } catch (s) {
          throw new Error("Invalid existing lines JSON: " + (s instanceof Error ? s.message : String(s)));
        }
      const r = {};
      e.addj && (r.ADDJ = e.addj), e.lnty && (r.LNTY = e.lnty), e.uorg && (r.UORG = e.uorg), e.uom && (r.UOM = e.uom), e.litm && (r.LITM = e.litm), e.uprc && (r.UPRC = e.uprc), e.uom4 && (r.UOM4 = e.uom4), i.push(r), postResult({
        linesArrayJSON: JSON.stringify(i),
        lineCount: i.length,
        success: !0,
        errorMessage: ""
      }), t();
    } catch (i) {
      postResult({
        linesArrayJSON: "",
        lineCount: 0,
        success: !1,
        errorMessage: i instanceof Error ? i.message : String(i)
      }), t();
    }
  });
}
function d(e) {
  return new Promise((t, n) => {
    try {
      let i = [];
      if (e.linesArrayJSON)
        try {
          const a = JSON.parse(e.linesArrayJSON);
          if (!Array.isArray(a))
            throw new Error("Lines array JSON is not an array");
          i = a;
        } catch (a) {
          throw new Error("Invalid lines array JSON: " + (a instanceof Error ? a.message : String(a)));
        }
      const r = {};
      e.shan && (r.SHAN = e.shan), e.vr01 && (r.VR01 = e.vr01), e.vr02 && (r.VR02 = e.vr02), e.drqj && (r.DRQJ = e.drqj), i.length > 0 && (r.GridIn_1_3 = i);
      const o = e.prettyPrint && e.prettyPrint.toString().toLowerCase() === "true" ? JSON.stringify(r, null, 2) : JSON.stringify(r);
      postResult({
        requestJSON: o,
        success: !0,
        errorMessage: "",
        lineCount: i.length
      }), t();
    } catch (i) {
      postResult({
        requestJSON: "",
        success: !1,
        errorMessage: i instanceof Error ? i.message : String(i),
        lineCount: 0
      }), t();
    }
  });
}
function c(e) {
  return new Promise((t, n) => {
    try {
      const i = JSON.parse(e.jsonString);
      postResult({
        isValid: !0,
        errorMessage: "",
        parsedJSON: JSON.stringify(i, null, 2)
      }), t();
    } catch (i) {
      postResult({
        isValid: !1,
        errorMessage: i instanceof Error ? i.message : String(i),
        parsedJSON: ""
      }), t();
    }
  });
}
function p() {
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
//# sourceMappingURL=index.js.map
