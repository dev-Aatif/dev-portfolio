import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ============================================================
// ROOT LAYOUT — Fonts, metadata, and global structure
// Replace [PLACEHOLDERS] with your actual info
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
  // [Replace with your actual name and title]
  title: "[Your Name] — Portfolio",
  description:
    "[A compelling meta description: e.g., Software engineer and designer crafting beautiful, performant web experiences.]",
  keywords: [
    "[your-name]",
    "portfolio",
    "software engineer",
    "web developer",
    "frontend",
    "designer",
  ],
  authors: [{ name: "[Your Name]" }],
  openGraph: {
    title: "[Your Name] — Portfolio",
    description:
      "[A compelling meta description for social sharing.]",
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
      </body>
    </html>
  );
}
