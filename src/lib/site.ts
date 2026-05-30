/**
 * Site-wide configuration derived from environment variables.
 * All contact details, URLs and third-party links live here.
 * Set values in .env.local — see .env.example for reference.
 */

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
  name: process.env.NEXT_PUBLIC_SCHOOL_NAME ?? "Language School",

  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+00 00 00000-0000",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@your-domain.com",
    whatsappNumber,
    get whatsappHref() {
      return `https://wa.me/${whatsappNumber}`;
    },
    instagramHref:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://instagram.com/your_handle",
    instagramHandle:
      process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "@your_handle",
  },

  checkout: {
    manualOffshore: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#",
  },
} as const;
