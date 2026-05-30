import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── Cormorant Garamond — display/editorial hierarchy ── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

/* ── Plus Jakarta Sans — functional/body hierarchy ── */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Language School — Professional English Communication",
    template: "%s | Language School",
  },
  description:
    "Live professional English communication program. For professionals who need real-world English: offshore operations, job interviews, and international business.",
  keywords: [
    "professional English",
    "English for offshore",
    "English for interviews",
    "live English classes",
    "business English communication",
    "English for oil and gas",
    "professional English training",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com",
    siteName: "Language School",
    title: "Language School — Professional English Communication",
    description:
      "Personalized English communication program. For offshore operations, job interviews, and international business.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Language School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Language School — Professional English Communication",
    description:
      "Personalized English communication program for professionals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
