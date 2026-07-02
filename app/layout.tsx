import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavRail from "./nav-rail";

const inconsolata = localFont({
  src: "./fonts/Inconsolata-VariableFont_wdth,wght.ttf",
  weight: "200 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Ro",
  description: "Growth Lead, Virio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inconsolata.className}>
      <body>
        <NavRail />
        {children}
      </body>
    </html>
  );
}
