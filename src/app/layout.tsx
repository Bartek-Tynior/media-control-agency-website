import CookiesConsent from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./GoogleAnalytics";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";

export const metadata: Metadata = {
  title: "Media Control Agency - Design / development Partner ",
  description: "Design / development partners for startup founders.",
  openGraph: {
    title: "",
    description: "Design / development partners for startup founders.",
    type: "website",
    locale: "nl_NL",
    url: "https://media-control-agency.nl",
    siteName: "Media Control Agency",
    countryName: "the Netherlands",
    alternateLocale: "en_US",
  },
  authors: [
    {
      name: "Media Control Agency",
    },
  ],
  creator: "Media Control Agency",
  publisher: "Media Control Agency",
  twitter: {},
};

const satoshi = localFont({
  src: "./fonts/Satoshi/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#0F0F0F] text-white font-sans antialiased",
          satoshi.variable
        )}
      >
        <Providers>
          <GoogleAnalytics />
          <Suspense fallback={<LoadingPage />}>
            <Navbar />
            <CookiesConsent />
            {children}
            <Toaster />
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
