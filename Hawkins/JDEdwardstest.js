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
onexecute = async function({ objectName: e, methodName: s, parameters: n, properties: r, configuration: i, schema: t }) {
  switch (e) {
    case "jsonBuilder":
      await l(s, n);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function l(e, s, n, r) {
  switch (e) {
    case "addLineItem":
      await y(s);
      break;
    case "buildFullJSON":
      await u(s);
      break;
    case "validateJSON":
      await d(s);
      break;
    case "initializeEmptyArray":
      await c();
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function y(e) {
  return new Promise((s, n) => {
    try {
      let r = [];
      if (e.existingLinesJSON)
        try {
          const t = JSON.parse(e.existingLinesJSON);
          if (!Array.isArray(t))
            throw new Error("Existing lines JSON is not an array");
          r = t;
        } catch (t) {
          throw new Error("Invalid existing lines JSON: " + (t instanceof Error ? t.message : String(t)));
        }
      const i = {};
      e.addj && (i.ADDJ = e.addj), e.lnty && (i.LNTY = e.lnty), e.uorg && (i.UORG = e.uorg), e.uom && (i.UOM = e.uom), e.litm && (i.LITM = e.litm), e.uprc && (i.UPRC = e.uprc), e.uom4 && (i.UOM4 = e.uom4), r.push(i), postResult({
        linesArrayJSON: JSON.stringify(r),
        lineCount: r.length,
        success: !0,
        errorMessage: ""
      }), s();
    } catch (r) {
      postResult({
        linesArrayJSON: "",
        lineCount: 0,
        success: !1,
        errorMessage: r instanceof Error ? r.message : String(r)
      }), s();
    }
  });
}
function u(e) {
  return new Promise((s, n) => {
    try {
      let r = [];
      if (e.linesArrayJSON)
        try {
          const a = JSON.parse(e.linesArrayJSON);
          if (!Array.isArray(a))
            throw new Error("Lines array JSON is not an array");
          r = a;
        } catch (a) {
          throw new Error("Invalid lines array JSON: " + (a instanceof Error ? a.message : String(a)));
        }
      const i = {};
      e.shan && (i.SHAN = e.shan), e.vr01 && (i.VR01 = e.vr01), e.vr02 && (i.VR02 = e.vr02), e.drqj && (i.DRQJ = e.drqj), r.length > 0 && (i.GridIn_1_3 = r);
      const o = e.prettyPrint && e.prettyPrint.toString().toLowerCase() === "true" ? JSON.stringify(i, null, 2) : JSON.stringify(i);
      postResult({
        requestJSON: o,
        success: !0,
        errorMessage: "",
        lineCount: r.length
      }), s();
    } catch (r) {
      postResult({
        requestJSON: "",
        success: !1,
        errorMessage: r instanceof Error ? r.message : String(r),
        lineCount: 0
      }), s();
    }
  });
}
function d(e) {
  return new Promise((s, n) => {
    try {
      const r = JSON.parse(e.jsonString);
      postResult({
        isValid: !0,
        errorMessage: "",
        parsedJSON: JSON.stringify(r, null, 2)
      }), s();
    } catch (r) {
      postResult({
        isValid: !1,
        errorMessage: r instanceof Error ? r.message : String(r),
        parsedJSON: ""
      }), s();
    }
  });
}
function c() {
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
//# sourceMappingURL=index.js.map
