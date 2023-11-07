import CookiesConsent from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title:
    "Media Control Agency: Digital Marketing, Web Development & Software Solutions",
  description:
    "Media Control Agency is a result-driven digital agency that understands and helps businesses with the digital marketing, website development even software solutions.",
  openGraph: {
    title:
      "Media Control Agency: Digital Marketing, Web Development & Software Solutions",
    description:
      "Media Control Agency is a result-driven digital agency that understands and helps businesses with the digital marketing, website development even software solutions.",
    type: "website",
    locale: "nl_NL",
    url: "https://media-control-agency.nl",
    siteName: "Media Control Agency",
  },
  authors: [
    {
      name: "Media Control Agency",
    },
  ],
  creator: "Media Control Agency",
  publisher: "Media Control Agency",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-[#0F0F0F] text-white font-sans antialiased",
          satoshi.variable
        )}
      >
        <Providers>
          <Navbar />
          <CookiesConsent />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
