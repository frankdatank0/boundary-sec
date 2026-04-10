import { TRPCError } from "@trpc/server";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required.",
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required.",
    });
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`,
    });
  }

  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`,
    });
  }

  return { title, content };
};

/**
 * Sends a notification email to valery@boundary-sec.com via Resend.
 * Returns true if sent successfully, false on transient failures.
 * Throws TRPCError for configuration issues.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  if (!ENV.resendApiKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Email service is not configured.",
    });
  }

  const htmlContent = content
    .split("\n")
    .map((line) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<strong>${line.slice(2, -2)}</strong>`;
      }
      const boldified = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return boldified || "<br/>";
    })
    .join("<br/>\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Boundary Security Contact <contact@boundary-sec.com>",
        to: "valery@boundary-sec.com",
        subject: title,
        text: content,
        html: `<pre style="font-family:sans-serif;white-space:pre-wrap">${htmlContent}</pre>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Resend error (${response.status})${detail ? `: ${detail}` : ""}`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Notification] Error sending email:", error);
    return false;
  }
}
