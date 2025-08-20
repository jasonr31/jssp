metadata = {
  systemName: "com.k2.sendgrid",
  displayName: "Twilio SendGrid",
  description: "A service broker for sending emails using Twilio SendGrid.",
  configuration: {
    apiKey: {
      displayName: "API Key",
      type: "string",
      required: !0
    },
    baseUrl: {
      displayName: "Base URL",
      type: "string",
      required: !1
    }
  }
};
ondescribe = async function({ configuration: e }) {
  postSchema({
    objects: {
      email: {
        displayName: "Email",
        description: "Send emails using Twilio SendGrid",
        properties: {
          to: {
            displayName: "To",
            type: "string",
            description: "Recipient email address"
          },
          toName: {
            displayName: "To Name",
            type: "string",
            description: "Recipient name"
          },
          from: {
            displayName: "From",
            type: "string",
            description: "Sender email address"
          },
          fromName: {
            displayName: "From Name",
            type: "string",
            description: "Sender name"
          },
          subject: {
            displayName: "Subject",
            type: "string",
            description: "Email subject"
          },
          contentHtml: {
            displayName: "HTML Content",
            type: "string",
            description: "HTML content of the email"
          },
          contentText: {
            displayName: "Text Content",
            type: "string",
            description: "Plain text content of the email"
          },
          cc: {
            displayName: "CC",
            type: "string",
            description: "CC recipient email address"
          },
          ccName: {
            displayName: "CC Name",
            type: "string",
            description: "CC recipient name"
          },
          bcc: {
            displayName: "BCC",
            type: "string",
            description: "BCC recipient email address"
          },
          bccName: {
            displayName: "BCC Name",
            type: "string",
            description: "BCC recipient name"
          },
          templateId: {
            displayName: "Template ID",
            type: "string",
            description: "SendGrid template ID"
          }
        },
        methods: {
          send: {
            displayName: "Send Email",
            type: "execute",
            inputs: ["to", "toName", "from", "fromName", "subject", "contentHtml", "contentText"],
            requiredInputs: ["to", "from", "subject"],
            outputs: ["statusCode"]
          },
          sendWithTemplate: {
            displayName: "Send Email with Template",
            type: "execute",
            inputs: ["to", "toName", "from", "fromName", "templateId"],
            requiredInputs: ["to", "from", "templateId"],
            outputs: ["statusCode"]
          },
          sendWithCC: {
            displayName: "Send Email with CC",
            type: "execute",
            inputs: ["to", "toName", "from", "fromName", "subject", "contentHtml", "contentText", "cc", "ccName"],
            requiredInputs: ["to", "from", "subject", "cc"],
            outputs: ["statusCode"]
          },
          sendWithBCC: {
            displayName: "Send Email with BCC",
            type: "execute",
            inputs: ["to", "toName", "from", "fromName", "subject", "contentHtml", "contentText", "bcc", "bccName"],
            requiredInputs: ["to", "from", "subject", "bcc"],
            outputs: ["statusCode"]
          }
        }
      }
    }
  });
};
onexecute = async function({
  objectName: e,
  methodName: a,
  parameters: t,
  properties: n,
  configuration: o,
  schema: s
}) {
  switch (e) {
    case "email":
      await p(a, n, t, o);
      break;
    default:
      throw new Error("The object " + e + " is not supported.");
  }
};
async function p(e, a, t, n) {
  if (!n.apiKey)
    throw new Error("SendGrid API Key is required");
  switch (e) {
    case "send":
      await r(a, n, !1, !1);
      break;
    case "sendWithTemplate":
      await y(a, n);
      break;
    case "sendWithCC":
      await r(a, n, !0, !1);
      break;
    case "sendWithBCC":
      await r(a, n, !1, !0);
      break;
    default:
      throw new Error("The method " + e + " is not supported.");
  }
}
function d(e, a = !1) {
  const t = [];
  if (e.to || t.push("To email address is required"), e.from || t.push("From email address is required"), a ? e.templateId || t.push("Template ID is required") : (e.subject || t.push("Subject is required"), !e.contentHtml && !e.contentText && t.push("Either HTML or plain text content is required")), t.length > 0)
    throw new Error(t.join(". "));
}
function r(e, a, t = !1, n = !1) {
  return new Promise((o, s) => {
    d(e);
    const m = {
      to: [{
        email: e.to,
        name: e.toName || void 0
      }]
    };
    t && e.cc && (m.cc = [{
      email: e.cc,
      name: e.ccName || void 0
    }]), n && e.bcc && (m.bcc = [{
      email: e.bcc,
      name: e.bccName || void 0
    }]);
    const c = {
      personalizations: [m],
      from: {
        email: e.from,
        name: e.fromName || void 0
      },
      subject: e.subject,
      content: []
    };
    e.contentHtml && c.content.push({
      type: "text/html",
      value: e.contentHtml
    }), e.contentText && c.content.push({
      type: "text/plain",
      value: e.contentText
    });
    const i = new XMLHttpRequest();
    i.onreadystatechange = function() {
      try {
        if (i.readyState !== 4) return;
        postResult({
          statusCode: i.status
        }), l(i), o();
      } catch (u) {
        s(u);
      }
    }, i.open("POST", "https://api.sendgrid.com/v3/mail/send"), i.setRequestHeader("Authorization", "Bearer " + a.apiKey), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(c));
  });
}
function y(e, a) {
  return new Promise((t, n) => {
    d(e, !0);
    const o = {
      personalizations: [{
        to: [{
          email: e.to,
          name: e.toName || void 0
        }],
        dynamic_template_data: e.templateData || {}
      }],
      from: {
        email: e.from,
        name: e.fromName || void 0
      },
      template_id: e.templateId
    }, s = new XMLHttpRequest();
    s.onreadystatechange = function() {
      try {
        if (s.readyState !== 4) return;
        postResult({
          statusCode: s.status
        }), l(s), t();
      } catch (m) {
        n(m);
      }
    }, s.open("POST", "https://api.sendgrid.com/v3/mail/send"), s.setRequestHeader("Authorization", "Bearer " + a.apiKey), s.setRequestHeader("Content-Type", "application/json"), s.send(JSON.stringify(o));
  });
}
function l(e) {
  if (e.status >= 200 && e.status < 300)
    return;
  let a = `Request failed with status ${e.status}`;
  try {
    const t = e.responseText ? JSON.parse(e.responseText) : null;
    t && t.errors && t.errors.length > 0 && (a = t.errors.map((n) => n.message).join(". "));
  } catch (t) {
    a += `. Unable to parse error response: ${t.message}`;
  }
  throw new Error(a);
}
//# sourceMappingURL=index.js.map

