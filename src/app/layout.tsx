import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const desc = "Portfolio of Arnav Kumar Gupta, a web developer from Bihar, India building modern websites, interactive interfaces and AI-powered products.";
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: `${site.name} | Web Developer & UI/UX Enthusiast`,
  description: desc,
  openGraph: { title: site.name, description: desc, type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${sora.variable}`}><body>{children}</body></html>);
}
