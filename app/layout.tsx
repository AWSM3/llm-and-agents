import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { contentData } from "@/lib/content-data";
import { DrawingOverlay } from "@/components/drawing/DrawingOverlay";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: contentData.meta.title,
  description: contentData.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <DrawingOverlay />
      </body>
    </html>
  );
}
