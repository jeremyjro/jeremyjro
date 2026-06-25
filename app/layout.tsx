import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import CursorTrail from "./cursor-trail";

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Ro",
  description: "Growth Lead, Virio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.className}>
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
