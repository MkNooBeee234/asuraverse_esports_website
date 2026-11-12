import nodemailer from "nodemailer";

export function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export const adminEmail = process.env.EMAIL_USER ?? "teamasuraverse@gmail.com";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeSubject(str: string): string {
  return str.replace(/[\r\n]/g, "");
}

const BASE_STYLE = `font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#090B10;color:#f0f0f0;padding:32px;border-radius:8px;`;
const ORANGE = "#FF7B00";

export function buildAdminTable(rows: Record<string, string>): string {
  const cells = Object.entries(rows)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 0;color:#888;width:160px;vertical-align:top">${escapeHtml(k)}</td><td style="padding:8px 0">${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");
  return `<div style="${BASE_STYLE}"><table style="width:100%;border-collapse:collapse">${cells}</table></div>`;
}

export function buildConfirmation(name: string, body: string): string {
  return `
    <div style="${BASE_STYLE}">
      <h2 style="color:${ORANGE};margin-bottom:16px">Message Received!</h2>
      <p style="color:#aaa;line-height:1.7">Hi ${escapeHtml(name)},</p>
      <p style="color:#aaa;line-height:1.7;margin-top:8px">${body}</p>
      <p style="color:#aaa;line-height:1.7;margin-top:8px">
        Follow us on <a href="https://www.instagram.com/teamasuraverse/" style="color:${ORANGE}">Instagram</a> for the latest.
      </p>
      <hr style="border-color:#333;margin:24px 0">
      <p style="color:#555;font-size:13px">Team AsuraVerse Esports Pvt Ltd · Gandhinagar, Gujarat, India</p>
    </div>
  `;
}

export { escapeHtml, sanitizeSubject };
