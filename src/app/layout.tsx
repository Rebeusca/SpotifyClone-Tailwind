import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web player: música para todas as pessoas.",
  description: "Listen to music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="/spotify-icon.png" type="image/x-icon" />
    </head>
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
