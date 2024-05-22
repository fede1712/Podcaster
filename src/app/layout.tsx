import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Header } from "./ui/header/header";

export const metadata: Metadata = {
  title: "Podcaster",
  description: "Itunes top podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-8">
        <Header />
        {children}
      </body>
    </html>
  );
}
