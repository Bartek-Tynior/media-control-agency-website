import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Media Control Agency: Level Up Your Digital Presence",
  description:
    "Media Control Agency is a digital marketing agency that helps businesses grow their online presence through Social Media, Product Design and Development and more.",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased text-white scroll-smooth",
        montserrat.className
      )}
    >
      <body className="min-h-screen bg-black antialiased">
        <Providers>
          <Navbar />

          <div className="container" id="container">
            {children}
          </div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
