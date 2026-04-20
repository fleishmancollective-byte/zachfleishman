import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/**
 * Type system: Geist Sans, single variable family, weights 100–900.
 *
 * Display headlines pull a heavier weight (600–700); body sits at 400.
 * Italic is intentionally NOT loaded — the `<em>` editorial accent uses
 * weight + color instead of a slant. No cursive anywhere.
 *
 * Exposed as two CSS vars so globals.css can bind body and display
 * separately even though they resolve to the same family:
 *   --font-body      → body + UI
 *   --font-display   → .display / h1/h2/h3
 */

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
