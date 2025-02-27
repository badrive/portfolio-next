import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Badreddine",
  description: "Badreddine Faras is a full-stack web developer based in Morocco.",
  metadataBase: new URL("https://badrfaras.me"),
  openGraph: {
    title: "Badreddine",
    description: "Badreddine Faras is a full-stack web developer based in Morocco.",
    url: "https://badrfaras.me",
    type: "website",
    images: [
      {
        url: "/content/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Badreddine Faras is a full-stack web developer based in Morocco.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Badreddine",
    description: "Badreddine Faras is a full-stack web developer based in Morocco.",
    images: [
      {
        url: "/content/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Badreddine Faras is a full-stack web developer based in Morocco.",
      },
    ],
  },
  keywords: ["badr", "faras", "portfolio", "badreddine faras"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
