import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Type system: Syne for display headlines, Urbanist for body + UI chrome.
 *
 * Both are variable fonts shipped locally from app/fonts/. The CSS var names
 * --font-display and --font-body flip the stack in one place (globals.css).
 *
 * Urbanist ships with a paired italic variable so the italic <em> inside a
 * .display headline renders as real italic (Syne has no italic axis, so the
 * em falls back to Urbanist-Italic for that single editorial accent).
 */

const display = localFont({
  variable: "--font-display",
  src: [
    {
      path: "./fonts/Syne-VariableFont_wght.ttf",
      style: "normal",
      weight: "400 800",
    },
  ],
  display: "swap",
});

const body = localFont({
  variable: "--font-body",
  src: [
    {
      path: "./fonts/Urbanist-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./fonts/Urbanist-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  display: "swap",
});

const title = "Zero to Six · Zach Fleishman";
const description =
  "A voice note to my younger self, made public. Ten short conversations, a live monthly Q&A, The Starting Line Playbook, and a door into the room where people are figuring this out together. $47.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://zachfleishman.com",
    siteName: "Zach Fleishman",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
