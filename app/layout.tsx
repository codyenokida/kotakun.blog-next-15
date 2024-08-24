import "./global.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inria_Sans, Patrick_Hand_SC } from "next/font/google";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { baseUrl } from "./sitemap";

import { Navbar } from "./components/nav";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inriaSans = Inria_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-sans",
});

const patrickHandsSC = Patrick_Hand_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand-sc",
});

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable,
        patrickHandsSC.variable,
        inriaSans.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-6 md:px-0">
          <div className="flex items-center justify-center mb-6 w-[70px] h-[70px] mx-auto">
            <Image
              src="/logo.webp"
              width={70}
              height={70}
              alt="logo emoji"
              unoptimized
            />
          </div>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
