import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trac’n Trade | Make what you love work for you",
  description: "Discover, collect and trade with trust. A new marketplace powered by TracSheet identity and interest-based intelligence.",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
