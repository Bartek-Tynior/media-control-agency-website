import CookiesConsent from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import localFont from "next/font/local";
import GoogleAnalytics from "./GoogleAnalytics";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://media-control-agency.com"),
  title: "Media Control Agency - Design Focused Digital Agency",
  openGraph: {
    title: "Media Control Agency - Design Focused Digital Agency",
    description:
      "Achieve more digitally. We empower companies to effectively reach their target audience through product design and [no] code development.",
    url: "https://media-control-agency.com",
    siteName: "Media Control Agency",
    type: "website",
    images: [
      {
        url: "https://media-control-agency.com/img/og_image.png",
        alt: "Media Control Agency Banner",
      },
    ],
  },
  description:
    "Achieve more digitally. We empower companies to effectively reach their target audience through product design and [no] code development.",
  applicationName: "Media Control Agency",
  generator: "Next.js",
  keywords: [
    "Product design",
    "web development",
    "no code",
    "digital agency",
    "app development",
    "UI/UX",
    "branding",
    "e-commerce",
    "SEO",
    "Clothing brand",
  ],
  referrer: "origin",
  viewport: "width=device-width, initial-scale=1",
  creator: "Bart Tynior",
  publisher: "Media Control Agency",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://media-control-agency.com/",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Media Control Agency - Design Focused Digital Agency",
    description:
      "Achieve more digitally. We empower companies to effectively reach their target audience through product design and [no] code development.",
    images: [
      {
        url: "https://media-control-agency.com/img/og_image.png",
        alt: "Media Control Agency Banner",
      },
    ],
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Media Control Agency",
              url: "https://media-control-agency.com",
              logo: "https://media-control-agency.com/img/logo.png",
              sameAs: [
                "https://www.facebook.com/people/Media-Control-Agency/61551901261084",
                "https://www.linkedin.com/company/media-control-agency",
                "https://www.instagram.com/mediacontrolag",
              ],
              description:
                "Achieve more digitally. We empower companies to effectively reach their target audience through product design and [no] code development.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Narcis 7",
                addressLocality: "Andijk",
                addressRegion: "Noord-Holland",
                postalCode: "1619BC",
                addressCountry: "The Netherlands",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31 619628588",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-[#0F0F0F] text-white font-sans antialiased select-none",
          satoshi.variable
        )}
      >
        <Providers>
          <GoogleAnalytics />
          <Navbar />
          <CookiesConsent />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
