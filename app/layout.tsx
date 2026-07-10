import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monkey Coffee | Find Your Coffee, Bar & Dining Escape",
  description:
    "A cozy space to sip, work, and connect. Premium coffee shop and dining experience in Pontianak.",
  keywords: "coffee, cafe, dining, workspace, Pontianak",
  authors: [{ name: "Monkey Coffee" }],
  openGraph: {
    title: "Monkey Coffee",
    description: "A cozy space to sip, work, and connect.",
    type: "website",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
