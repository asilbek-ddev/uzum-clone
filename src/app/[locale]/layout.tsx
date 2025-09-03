import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { routing } from "../../../i18n/routing";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://uzum-market-online.vercel.app"),

  title: {
    default: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    template: "%s | Uzum Market"
  },

  description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping. Maishiy texnika, kiyim-kechak, elektronika va boshqalar.",

  openGraph: {
    title: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping.",
    url: "https://uzum-market-online.vercel.app",
    type: "website",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "Uzum online do'koni"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Uzum online do'koni - Barcha mahsulotlar bir joyda",
    description: "O'zbekistondagi eng yirik online do'kon. Eng arzon narxlarda turli xil mahsulotlarni toping.",
    images: ["/images/twitter-image.jpg"],
  },

  authors: [{ name: "Asilbek Developer" }],
  creator: "Asilbek Dev",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}