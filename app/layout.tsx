import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavRail from "./nav-rail";

const raleway = localFont({
  src: [
    { path: "./fonts/Raleway-VariableFont_wght.ttf", weight: "100 900", style: "normal" },
    { path: "./fonts/Raleway-Italic-VariableFont_wght.ttf", weight: "100 900", style: "italic" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremy Ro",
  description: "Growth Lead, Virio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <NavRail />
        {children}
      </body>
    </html>
  );
}
