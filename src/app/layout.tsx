import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "stuart.tokyo",
  description: "Electrographic Brain Technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-warmblack text-eggshell">{children}</body>
    </html>
  );
}
