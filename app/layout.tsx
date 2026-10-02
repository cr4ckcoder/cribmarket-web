import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AosProvider } from "@/components/providers/AosProvider";
import { site } from "@/lib/site";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Crib Market | Multi-Asset CFD Trading Platform",
    template: "%s | Crib Market",
  },
  description:
    "Trade forex, indices, commodities, and crypto CFDs with Crib Market. Standard, Growth, and Edge accounts on MetaTrader 5. Licensed from USA.",
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  keywords: [
    "Crib Market",
    "CFD trading",
    "Forex broker",
    "Standard account",
    "Growth account",
    "Edge account",
    "MetaTrader 5",
    "trade indices",
    "commodities CFDs",
    "crypto CFDs",
    "USA licensed broker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Crib Market | Multi-Asset CFD Trading Platform",
    description:
      "Trade Forex, Indices, Commodities, and Crypto CFDs with transparent pricing. Standard, Growth, and Edge accounts. Licensed from USA.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Crib Market — Multi-Asset CFD Trading",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crib Market | Multi-Asset CFD Trading Platform",
    description:
      "Trade Forex, Indices, Commodities, and Crypto CFDs with Crib Market. Licensed from USA.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  category: "finance",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/og.png`,
  email: site.supportEmail,
  description:
    "Crib Market provides multi-asset CFD trading with Standard, Growth, and Edge accounts on MetaTrader 5.",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.supportEmail,
    telephone: "+447452016572",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark", backgroundColor: "#0f0f0f" }}>
      <body
        className={inter.variable}
        style={{ colorScheme: "dark", backgroundColor: "#0f0f0f" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <AosProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
