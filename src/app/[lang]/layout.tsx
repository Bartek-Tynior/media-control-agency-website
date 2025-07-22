import CookiesConsent from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import localFont from "next/font/local";
import GoogleAnalytics from "../GoogleAnalytics";
import type { Metadata } from "next";
import Head from "next/head";
import { getDictionary } from "./dictionaries";
import { LangContextProvider } from "@/lib/lang-context";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const isDutch = params.lang === "nl";

  return {
    metadataBase: new URL("https://media-control-agency.com"),
    title: isDutch
      ? "Media Control Agency | Digitale Studio voor Design & Ontwikkeling"
      : "Media Control Agency | Digital Studio for Design & Development",
    themeColor: "#0F0F0F",
    description: isDutch
      ? "Bereik meer digitaal. Wij helpen bedrijven hun doelgroep te bereiken via productdesign en [no] code ontwikkeling."
      : "Achieve more digitally. We empower companies to effectively reach their target audience through product design and [no] code development.",
    keywords: isDutch
      ? [
          "productontwerp",
          "webontwikkeling",
          "no code",
          "digitale studio",
          "e-commerce",
          "branding",
          "SEO",
        ]
      : [
          "Product design",
          "web development",
          "no code",
          "digital agency",
          "branding",
          "SEO",
        ],
    openGraph: {
      siteName: "Media Control Agency",
      title: isDutch
        ? "Media Control Agency | Digitale Studio voor Design & Ontwikkeling"
        : "Media Control Agency | Digital Studio for Design & Development",
      locale: isDutch ? "nl_NL" : "en_US",
      type: "website",
      description: isDutch
        ? "Bereik meer digitaal. Wij helpen bedrijven hun doelgroep te bereiken via productdesign en [no] code ontwikkeling."
        : "Achieve more digitally. We empower companies to effectively reach their target audience.",
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
    alternates: {
      canonical: `https://media-control-agency.com/${params.lang}`,
      languages: {
        en: "https://media-control-agency.com/en",
        nl: "https://media-control-agency.com/nl",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: "summary_large_image",
      title: isDutch
        ? "Media Control Agency - Designgedreven Digitale Agency"
        : "Media Control Agency - Design Focused Digital Agency",
      description: isDutch
        ? "Bereik meer digitaal met onze creatieve digitale oplossingen."
        : "Achieve more digitally with our creative digital solutions.",
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "nl" }];
}

const satoshi = localFont({
  src: "../fonts/Satoshi/Satoshi-Regular.woff2",
  variable: "--font-satoshi",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "nl" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
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
        <link
          rel="alternate"
          hrefLang="en"
          href="https://media-control-agency.com/en"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://media-control-agency.com/nl"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://media-control-agency.com/en"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-[#0F0F0F] text-white font-sans antialiased",
          satoshi.variable
        )}
      >
        <Providers>
          <GoogleAnalytics />
          <Navbar lang={params.lang} dict={dict} />
          <CookiesConsent />
          <LangContextProvider lang={params.lang} dict={dict}>
            {children}
            <LanguageSwitcher />
          </LangContextProvider>
          <Toaster />
          <Footer lang={params.lang} dict={dict} />
        </Providers>
      </body>
    </html>
  );
}
