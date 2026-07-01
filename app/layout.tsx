import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavRail from "./nav-rail";

const lineSeed = localFont({
  src: [
    { path: "./fonts/LINESeedJP-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/LINESeedJP-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/LINESeedJP-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/LINESeedJP-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Ro",
  description: "Growth Lead, Virio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lineSeed.className}>
      <body>
        <NavRail />
        {children}
      </body>
    </html>
  );
}
