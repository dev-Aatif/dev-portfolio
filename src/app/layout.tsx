import type { Metadata, Viewport } from "next";
import { Rethink_Sans, IBM_Plex_Sans, Red_Hat_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// ============================================================
// ROOT LAYOUT — Fonts, metadata, viewport, and progressive reveal
// ============================================================

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  display: "swap",
});

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a120e",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "dev-Aatif: Systems, Mobile, Desktop & Web",
  description:
    "Portfolio of Aatif P (dev-Aatif): local-first Rust CLI tools, offline-first Kotlin Android apps, Electron desktop software, and Next.js web applications.",
  keywords: [
    "dev-Aatif",
    "Aatif",
    "Rust",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Python",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Aatif P (dev-Aatif)", url: "https://github.com/dev-Aatif" }],
  openGraph: {
    title: "dev-Aatif: Systems, Mobile, Desktop & Web",
    description:
      "Local-first Rust tools, offline Kotlin apps, Electron desktop utilities, and fast web systems by dev-Aatif.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${rethinkSans.variable} ${ibmPlexSans.variable} ${redHatMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
