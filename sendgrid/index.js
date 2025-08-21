metadata = {
  systemName: "com.k2.sendgrid",
  displayName: "SendGrid Mail Service",
  description: "A service broker for SendGrid's Mail API v3.",
  configuration: {
    apiKey: {
      displayName: "API Key",
      type: "string",
      required: !0
    }
  }
};
ondescribe = async function({ configuration: t }) {
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
          },
          send_at: {
            displayName: "Send At",
            description: "UTC timestamp for when to send the batch",
            type: "datetime"
          },
          on_behalf_of: {
            displayName: "On Behalf Of",
            description: "Subuser to send the batch on behalf of",
            type: "string"
          }
        },
        methods: {
          create: {
            displayName: "Create Batch",
            type: "create",
            inputs: ["send_at", "on_behalf_of"],
            outputs: ["batch_id", "status"]
          },
          validate: {
            displayName: "Validate Batch",
            type: "read",
            inputs: ["batch_id", "on_behalf_of"],
            outputs: ["batch_id", "status"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: t,
  methodName: a,
  parameters: s,
  properties: n,
  configuration: e,
  schema: i
}) {
  switch (t) {
    case "mail":
      await r(a, n, e);
      break;
    case "batch":
      await d(a, n, e);
      break;
    default:
      throw new Error("The object " + t + " is not supported.");
  }
};
async function r(t, a, s) {
  switch (t) {
    case "send":
      await c(a, s);
      break;
    default:
      throw new Error("The method " + t + " is not supported.");
  }
}
async function d(t, a, s) {
  switch (t) {
    case "create":
      await u(s, a);
      break;
    case "validate":
      await h(a, s);
      break;
    default:
      throw new Error("The method " + t + " is not supported.");
  }
}
function c(t, a) {
  return new Promise((s, n) => {
    if (!a.apiKey) throw new Error("API Key not provided in configuration");
    const e = new XMLHttpRequest();
    e.onreadystatechange = function() {
      try {
        if (e.readyState !== 4) return;
        if (e.status === 202)
          postResult({
            status: "success"
          }), s();
        else
          throw new Error("Failed with status " + e.status);
      } catch (o) {
        n(o);
      }
    };
    const i = {
      personalizations: [{
        to: [{
          email: t.to_email,
          name: t.to_name
        }]
      }],
      from: {
        email: t.from_email,
        name: t.from_name
      },
      subject: t.subject,
      content: [{
        type: "text/html",
        value: t.content
      }]
    };
    e.open("POST", "https://api.sendgrid.com/v3/mail/send"), e.setRequestHeader("Authorization", `Bearer ${a.apiKey}`), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(i));
  });
}
function u(t, a) {
  return new Promise((s, n) => {
    if (!t.apiKey) throw new Error("API Key not provided in configuration");
    const e = new XMLHttpRequest();
    e.onreadystatechange = function() {
      try {
        if (e.readyState !== 4) return;
        if (e.status === 201) {
          const o = JSON.parse(e.responseText);
          postResult({
            batch_id: o.batch_id,
            status: "created"
          }), s();
        } else
          throw new Error("Failed with status " + e.status);
      } catch (o) {
        n(o);
      }
    }, e.open("POST", "https://api.sendgrid.com/v3/mail/batch"), e.setRequestHeader("Authorization", `Bearer ${t.apiKey}`), a.on_behalf_of && e.setRequestHeader("on-behalf-of", a.on_behalf_of);
    const i = a.send_at ? { send_at: a.send_at } : {};
    e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(i));
  });
}
function h(t, a) {
  return new Promise((s, n) => {
    if (!a.apiKey) throw new Error("API Key not provided in configuration");
    if (!t.batch_id) throw new Error("Batch ID is required");
    const e = new XMLHttpRequest();
    e.onreadystatechange = function() {
      try {
        if (e.readyState !== 4) return;
        if (e.status === 200)
          postResult({
            batch_id: t.batch_id,
            status: "valid"
          }), s();
        else
          throw new Error("Failed with status " + e.status);
      } catch (i) {
        n(i);
      }
    }, e.open("GET", `https://api.sendgrid.com/v3/mail/batch/${encodeURIComponent(t.batch_id)}`), e.setRequestHeader("Authorization", `Bearer ${a.apiKey}`), t.on_behalf_of && e.setRequestHeader("on-behalf-of", t.on_behalf_of), e.send();
  });
}
//# sourceMappingURL=index.js.map
