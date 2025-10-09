import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/layout/Hero'

export const metadata: Metadata = {
  title: "Uzum Market — O‘zbekistondagi Internet-do'kon va Marketpleys",
  description: "Mahsulotlar 90% gacha chegirmada🔥 12 oylik muddatli to'lov. 1 kunda yetkazib berish. Elektronika, maishiy texnika, bolalar buyumlari, kiyim-kechak va poyabzal, uy, sport, salomatlik va go'zallik uchun zarur hamma narsa, kitoblar, zoomahsulotlar va boshqa ko‘plab narsalar. Chegirma va aksiyalar har kuni Uzum Marketda",
  keywords: "uzum, clone, uzbekistan, e-commerce, online shopping, online store, savdo, mahsulotlar, chegirmalar, yangi kelganlar",
  authors: [{ name: 'Asilbek', url: 'https://t.me/personal_telegram_account_2' }],
  creator: 'Asilbek',
  publisher: 'Uzum Market clone',
  openGraph: {
    title: "Uzum Market — O‘zbekistondagi Internet-do'kon va Marketpleys",
    description: "Mahsulotlar 90% gacha chegirmada🔥 12 oylik muddatli to'lov. 1 kunda yetkazib berish. Elektronika, maishiy texnika, bolalar buyumlari, kiyim-kechak va poyabzal, uy, sport, salomatlik va go'zallik uchun zarur hamma narsa, kitoblar, zoomahsulotlar va boshqa ko‘plab narsalar. Chegirma va aksiyalar har kuni Uzum Marketda",
    url: 'https://www-uzum-uz.vercel.app/uz',
    siteName: 'uzum market clone',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Graph rasmi tavsifi',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Uzum Market — O‘zbekistondagi Internet-do'kon va Marketpleys",
    description: "Mahsulotlar 90% gacha chegirmada🔥 12 oylik muddatli to'lov. 1 kunda yetkazib berish. Elektronika, maishiy texnika, bolalar buyumlari, kiyim-kechak va poyabzal, uy, sport, salomatlik va go'zallik uchun zarur hamma narsa, kitoblar, zoomahsulotlar va boshqa ko‘plab narsalar. Chegirma va aksiyalar har kuni Uzum Marketda",
    images: ['https://example.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: 'https://www-uzum-uz.vercel.app/uz',
    languages: {
      'uz-UZ': 'https://www-uzum-uz.vercel.app/uz',
      'ru-RU': 'https://www-uzum-uz.vercel.app/ru',
    },
  },
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Home