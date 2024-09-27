import CookiesConsent from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import localFont from "next/font/local";
import GoogleAnalytics from "./GoogleAnalytics";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Your Company",
  description:
    "Welcome to Your Company. We provide top-notch services, case studies, and answers to your frequently asked questions.",
  applicationName: "Your Company",
  generator: "Next.js",
  keywords: [],
  referrer: "origin",
  themeColor: "#ffffff",
  colorScheme: "light",
  viewport: "width=device-width, initial-scale=1",
  creator: "Your Company Team",
  publisher: "Your Company",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourcompany.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Your Company - Home",
    description:
      "Explore our services, case studies, and frequently asked questions to learn more about what we do.",
    url: "https://yourcompany.com",
    siteName: "Your Company",
    type: "website",
    images: [
      {
        url: "https://yourcompany.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourcompany",
    creator: "@yourcompany",
    title: "Your Company - Home",
    description:
      "Welcome to Your Company. We offer the best services and insights for your business.",
    images: ["https://yourcompany.com/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-token",
    yandex: "your-yandex-verification-token",
  },
  appleWebApp: {
    capable: true,
    title: "Your Company",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
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
          <Navbar />
          <CookiesConsent />
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
