import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// ============================================================
// ROOT LAYOUT — Fonts, metadata, and global structure
// ============================================================

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "dev-Aatif — Portfolio",
  description:
    "Software engineer and designer crafting beautiful, performant web, mobile and desktop experiences.",
  keywords: [
    "dev-Aatif",
    "portfolio",
    "software engineer",
    "web developer",
    "frontend",
    "designer",
  ],
  authors: [{ name: "dev-Aatif" }],
  openGraph: {
    title: "dev-Aatif — Portfolio",
    description:
      "Software engineer and designer crafting beautiful, performant web, mobile and desktop experiences.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
