import nodemailer from "nodemailer";

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error("SMTP-Konfiguration fehlt");
  }
  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE != null
      ? process.env.SMTP_SECURE === "true"
      : port === 465;
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

/** Sauberes, markenkonformes HTML-Mail-Layout. */
export function brandedHtml(
  heading: string,
  intro: string,
  rows: Array<[string, string]>,
): string {
  const cells = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e4e8e4;color:#5b615b;font-size:13px;width:170px;vertical-align:top;">${escapeHtml(
            label,
          )}</td>
          <td style="padding:10px 0;border-bottom:1px solid #e4e8e4;color:#1a1a1a;font-size:15px;font-weight:600;">${escapeHtml(
            value,
          ).replace(/\n/g, "<br>")}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="de"><body style="margin:0;background:#f4f6f4;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background:#ffffff;border:1px solid #e4e8e4;border-radius:14px;overflow:hidden;">
      <div style="background:#1D653B;padding:22px 28px;">
        <div style="color:#ffffff;font-size:18px;font-weight:700;">Physiotherapie Zentrum Nord</div>
        <div style="color:#cde6d5;font-size:13px;margin-top:2px;">${escapeHtml(heading)}</div>
      </div>
      <div style="padding:26px 28px;">
        <p style="margin:0 0 18px;color:#33372f;font-size:15px;line-height:1.6;">${escapeHtml(
          intro,
        )}</p>
        <table style="width:100%;border-collapse:collapse;">${cells}</table>
      </div>
    </div>
    <p style="text-align:center;color:#9aa39a;font-size:12px;margin:16px 0 0;">
      Automatisch über das Formular auf krankengymnastik-in-hannover.de gesendet.
    </p>
  </div>
</body></html>`;
}

export async function sendMail(opts: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const transport = getTransport();
  const to = process.env.CONTACT_TO || process.env.SMTP_USER!;
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER!;
  await transport.sendMail({
    from: `"Physiotherapie Zentrum Nord" <${from}>`,
    to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}
