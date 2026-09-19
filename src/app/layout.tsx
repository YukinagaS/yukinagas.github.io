import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import SiteHeader from "@/component/site/SiteHeader";
import SiteFooter from "@/component/site/SiteFooter";

export const metadata: Metadata = {
  title: "stuart.tokyo",
  description: "Electrographic Brain Technology",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-dark-dk text-neutral-lt">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
