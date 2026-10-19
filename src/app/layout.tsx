import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Short Let Management London | Ichiban Stays", template: "%s" },
  description:
    "Short let management in London for UK landlords. Ichiban Stays handles bookings, guests, cleaning and compliance, with no upfront fees. Get a free projection.",
  icons: { icon: "https://ichibanstays.com/wp-content/uploads/2026/07/cropped-Ichiban-Stays-Logo5.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cormorant:wght@400;600&family=Inter:wght@400;500;600&family=Roboto:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
