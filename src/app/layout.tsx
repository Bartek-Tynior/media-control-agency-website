import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Media Control Agency: Level Up Your Digital Presence",
  description:
    "Media Control Agency is a digital agency that helps businesses grow their online presence through software development and digital marketing.",
  openGraph: {
    title: "Media Control Agency: Level Up Your Digital Presence",
    description:
      "Media Control Agency is a digital agency that helps businesses grow their online presence through software development and digital marketing.",
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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
