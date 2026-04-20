import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Type system: the original cream editorial direction.
 * - Playfair Display (serif, dramatic) for display headlines with italic em accent.
 * - Inter (sans, clean) for body + UI chrome.
 *
 * Variables are keyed as --font-grotesk (→ Inter) and --font-serif (→ Playfair)
 * so globals.css flips them in one place.
 */

const grotesk = Inter({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${grotesk.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
