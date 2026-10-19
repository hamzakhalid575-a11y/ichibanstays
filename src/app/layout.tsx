import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ConsentBanner from "@/components/ConsentBanner";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Short Let Management London & UK | Ichiban Stays", template: "%s" },
  icons: {
    icon: [
      { url: "/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-01-at-6.20.17-PM-150x150.jpeg", sizes: "32x32" },
      { url: "/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-01-at-6.20.17-PM-300x300.jpeg", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-01-at-6.20.17-PM-300x300.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cormorant:wght@400;600&family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100000] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:top-2 focus:left-2">Skip to content</a>
        <Navbar />
        <main id="content" className="flex-1">{children}</main>
        <Footer />
        <MobileBar />
        <ConsentBanner />
      </body>
    </html>
  );
}
