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
      <body className="bg-warmblack text-eggshell">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
