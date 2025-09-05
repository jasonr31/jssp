metadata = {
  systemName: "com.ofac.api",
  displayName: "OFAC Sanctions Search API",
  description: "A service broker for OFAC-API.com's /v4/search endpoint.",
  configuration: {
    baseUrl: {
      displayName: "Base URL",
      type: "string",
      required: !0,
      value: "https://api.ofac-api.com"
    }
  }
};
ondescribe = async function({ configuration: s }) {
  postSchema({
    objects: {
      search: {
        displayName: "Sanctions Search",
        description: "Search against OFAC-API.com's combined sanctions data set.",
        properties: {
          // Input properties for a case
          name: {
            displayName: "Name",
            description: "Name to search (required)",
            type: "string"
          },
          type: {
            displayName: "Type",
            description: "Entity type (person, organization, vessel, aircraft)",
            type: "string"
          },
          dob: {
            displayName: "Date of Birth",
            description: "Date of birth (YYYY-MM-DD)",
            type: "string"
          },
          gender: {
            displayName: "Gender",
            description: "Gender",
            type: "string"
          },
          citizenship: {
            displayName: "Citizenship",
            description: "Citizenship",
            type: "string"
          },
          minScore: {
            displayName: "Minimum Score",
            description: "Minimum match score (optional)",
            type: "number"
          },
          sources: {
            displayName: "Sources",
            description: "Data sources to filter (comma separated)",
            type: "string"
          },
          types: {
            displayName: "Types",
            description: "Entity types to filter (comma separated)",
            type: "string"
          },
          // Output property
          results: {
            displayName: "Results",
            description: "Search results",
            type: "string"
          },
          error: {
            displayName: "Error",
            description: "Error flag",
            type: "boolean"
          },
          errorMessage: {
            displayName: "Error Message",
            description: "Error message",
            type: "string"
          }
        },
        methods: {
          search: {
            displayName: "Search",
            type: "execute",
            inputs: ["name", "type", "dob", "gender", "citizenship", "minScore", "sources", "types"],
            outputs: ["results", "error", "errorMessage"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: s,
  methodName: r,
  parameters: i,
  properties: n,
  configuration: t,
  schema: a
}) {
  switch (s) {
    case "search":
      await y(r, n, t);
      break;
    default:
      throw new Error("The object " + s + " is not supported.");
  }
};
async function y(s, r, i) {
  switch (s) {
    case "search":
      await m(r, i);
      break;
    default:
      throw new Error("The method " + s + " is not supported.");
  }
}
function m(s, r) {
  return new Promise((i, n) => {
    if (!r.baseUrl) throw new Error("Base URL not provided in configuration");
    const t = new XMLHttpRequest();
    t.onreadystatechange = function() {
      try {
        if (t.readyState !== 4) return;
        let e = {};
        try {
          e = JSON.parse(t.responseText);
        } catch {
          e = {};
        }
        const p = e && typeof e == "object" && "results" in e ? e.results : [], d = e && typeof e == "object" && "error" in e ? e.error : !1, c = e && typeof e == "object" && "errorMessage" in e ? e.errorMessage : "";
        t.status === 200 ? (postResult({
          results: JSON.stringify(p),
          error: d,
          errorMessage: c
        }), i()) : (postResult({
          results: "",
          error: !0,
          errorMessage: c || `Failed with status ${t.status}`
        }), i());
      } catch (e) {
        n(e);
      }
    };
    const a = {
      name: s.name || "",
      type: s.type || void 0,
      dob: s.dob || void 0,
      gender: s.gender || void 0,
      citizenship: s.citizenship || void 0
    };
    Object.keys(a).forEach((e) => a[e] === void 0 && delete a[e]);
    const o = {
      cases: [a]
    };
    s.minScore && (o.minScore = s.minScore), typeof s.sources == "string" && (o.sources = s.sources.split(",").map((e) => e.trim())), typeof s.types == "string" && (o.types = s.types.split(",").map((e) => e.trim())), t.open("POST", `${r.baseUrl}/v4/search`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(o));
  });
}
//# sourceMappingURL=index.js.map
