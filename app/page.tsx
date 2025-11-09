import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata={
  title: "Uzum Market — Oʻzbekistondagi Milliy Marketpleys. Eksklyuziv tovarlar va aksiyalar.",
  description: "🔥Muddatli toʻlov — 24 oygacha. Yetkazib berish 1 kun ichida. Elektronika, kiyim-kechak, uy uchun tovarlar. Uzum Marketda har kuni aksiyalar! Tovarlarni qulay qaytarish va butun Oʻzbekiston boʻylab topshirish punktlari.",
  creator: "Asilbek",
}

const page = () => {
  return <Navbar/>;
}

export default page
