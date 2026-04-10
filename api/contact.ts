import type { Request, Response } from "express";

const NEED_LABELS: Record<string, string> = {
  agents: "AI Agent Services",
  pentest: "Penetration Testing",
  both: "Both (Agents + Pentesting)",
};

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, need, message } = req.body ?? {};

  if (!name || !email || !need || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const subject = `New Contact Form: ${name} — ${NEED_LABELS[need] ?? need}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Service Needed: ${NEED_LABELS[need] ?? need}`,
    ``,
    `Message:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Boundary Security <contact@boundary-sec.com>",
        to: "valery@boundary-sec.com",
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error(`[Contact] Resend error (${response.status}): ${detail}`);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
