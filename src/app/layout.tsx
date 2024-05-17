import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "./fonts";

export const metadata: Metadata = {
  title: "Orchard Frontend Developer Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
