import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logo AI",
  description: "Create unique, high-quality logos instantly with AI. Customize styles, colors, and icons to design the perfect logo for your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
        </head>
        <body className={`${sans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
