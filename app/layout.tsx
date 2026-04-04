import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.businessName} | Premium Tile Collections`,
  description: "Discover our premium collections of tiles for your elegant home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
