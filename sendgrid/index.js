metadata = {
  systemName: "com.k2.sendgrid",
  displayName: "SendGrid Mail Service",
  description: "A service broker for SendGrid's Mail API v3."
};
ondescribe = async function({ configuration: e }) {
  postSchema({
    objects: {
      mail: {
        displayName: "Mail",
        description: "Send emails through SendGrid",
        properties: {
          // Response properties
          status: {
            displayName: "Status",
            description: "Send status",
            type: "string"
          },
          // Input properties for mail send
          from_email: {
            displayName: "From Email",
            description: "Sender email address",
            type: "string"
          },
          from_name: {
            displayName: "From Name",
            description: "Sender name",
            type: "string"
          },
          to_email: {
            displayName: "To Email",
            description: "Recipient email address",
            type: "string"
          },
          to_name: {
            displayName: "To Name",
            description: "Recipient name",
            type: "string"
          },
          subject: {
            displayName: "Subject",
            description: "Email subject",
            type: "string"
          },
          content: {
            displayName: "Content",
            description: "Email content (HTML)",
            type: "string"
          }
        },
        methods: {
          send: {
            displayName: "Send Email",
            type: "execute",
            inputs: ["from_email", "from_name", "to_email", "to_name", "subject", "content"],
            outputs: ["status"]
          }
        }
      },
      batch: {
        displayName: "Batch",
        description: "Manage email batch operations",
        properties: {
          batch_id: {
            displayName: "Batch ID",
            description: "The batch identifier",
            type: "string"
          },
          status: {
            displayName: "Status",
            description: "Batch operation status",
            type: "string"
          }
        },
        methods: {
          create: {
            displayName: "Create Batch",
            type: "create",
            outputs: ["batch_id", "status"]
          },
          validate: {
            displayName: "Validate Batch",
            type: "read",
            inputs: ["batch_id"],
            outputs: ["status"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: e,
  methodName: s,
  parameters: i,
  properties: a,
  configuration: t,
  schema: n
}) {
  switch (e) {
    case "mail":
      await o(s, a, t);
      break;
    case "batch":
      await c(s, a, t);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function o(e, s, i) {
  switch (e) {
    case "send":
      await d(s, i);
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
async function c(e, s, i) {
  switch (e) {
    case "create":
      await p(i);
      break;
    case "validate":
      await u(s, i);
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function d(e, s) {
  return new Promise((i, a) => {
    if (!s.apiKey) throw new Error("API Key not provided in configuration");
    const t = new XMLHttpRequest();
    t.onreadystatechange = function() {
      try {
        if (t.readyState !== 4) return;
        if (t.status === 202)
          postResult({
            status: "success"
          }), i();
        else
          throw new Error("Failed with status " + t.status);
      } catch (r) {
        a(r);
      }
    };
    const n = {
      personalizations: [{
        to: [{
          email: e.to_email,
          name: e.to_name
        }]
      }],
      from: {
        email: e.from_email,
        name: e.from_name
      },
      subject: e.subject,
      content: [{
        type: "text/html",
        value: e.content
      }]
    };
    t.open("POST", "https://api.sendgrid.com/v3/mail/send"), t.setRequestHeader("Authorization", `Bearer ${s.apiKey}`), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify(n));
  });
}
function p(e) {
  return new Promise((s, i) => {
    if (!e.apiKey) throw new Error("API Key not provided in configuration");
    const a = new XMLHttpRequest();
    a.onreadystatechange = function() {
      try {
        if (a.readyState !== 4) return;
        if (a.status === 201) {
          const t = JSON.parse(a.responseText);
          postResult({
            batch_id: t.batch_id,
            status: "created"
          }), s();
        } else
          throw new Error("Failed with status " + a.status);
      } catch (t) {
        i(t);
      }
    }, a.open("POST", "https://api.sendgrid.com/v3/mail/batch"), a.setRequestHeader("Authorization", `Bearer ${e.apiKey}`), a.send();
  });
}
function u(e, s) {
  return new Promise((i, a) => {
    if (!s.apiKey) throw new Error("API Key not provided in configuration");
    if (!e.batch_id) throw new Error("Batch ID is required");
    const t = new XMLHttpRequest();
    t.onreadystatechange = function() {
      try {
        if (t.readyState !== 4) return;
        if (t.status === 200)
          postResult({
            batch_id: e.batch_id,
            status: "valid"
          }), i();
        else
          throw new Error("Failed with status " + t.status);
      } catch (n) {
        a(n);
      }
    }, t.open("GET", `https://api.sendgrid.com/v3/mail/batch/${encodeURIComponent(e.batch_id)}`), t.setRequestHeader("Authorization", `Bearer ${s.apiKey}`), t.send();
  });
}
//# sourceMappingURL=index.js.map
