/**
 * WhatsApp conversion utility
 *
 * Builds wa.me deep-links with contextual pre-filled messages per segment.
 * WhatsApp number must be set in NEXT_PUBLIC_WHATSAPP_NUMBER env variable.
 * Format: country code + number, no + or spaces (e.g. "10012345678")
 */

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

export type WhatsAppSegment =
  | "generic"
  | "offshore"
  | "interviews"
  | "communication"
  | "quiz"
  | "blog"
  | "trial-lesson";

const PREFILLED_MESSAGES: Record<WhatsAppSegment, string> = {
  generic:
    "Hi, I'd like to learn more about the Language School programs.",

  offshore:
    "Hi, I'm interested in the Offshore English program. I'd like to understand how it works.",

  interviews:
    "Hi, I have an upcoming job interview in English and I'd like to learn about Language School's interview preparation program.",

  communication:
    "Hi, I need to improve my professional English communication and I'd like to know more about your program.",

  quiz:
    "Hi, I completed the English assessment and I'd like to understand which program is the best fit for me.",

  blog:
    "Hi, I read an article on the Language School blog and I'd like to know more about the programs.",

  "trial-lesson":
    "Hi, I'd like to schedule a free trial session with Language School. I'd like to understand how the program works.",
};

/** Build a wa.me URL with an appropriate pre-filled message for the segment */
export function buildWhatsAppURL(
  segment: WhatsAppSegment = "generic",
  customMessage?: string
): string {
  const message = customMessage ?? PREFILLED_MESSAGES[segment];
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/** Get the pre-filled message text for a segment (useful for display) */
export function getPrefilledMessage(segment: WhatsAppSegment): string {
  return PREFILLED_MESSAGES[segment];
}
