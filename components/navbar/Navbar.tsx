"use clint"

import Link from "next/link"
import NavbarMap from "./NavbarMap"
import NavbarLanguage from "./NavbarLanguage"
import Image from "next/image"
import uzum_home from "../icons/uzum-home.svg"
import { CartIcon, UserIcon, WishesIcon } from "../icons/icons"
import React from "react"

const list = [
  {
    id: "ad78v44r5e-g4rth1",
    name: "Kirish",
    icon: UserIcon,
    href: "",
  }, {
    id: "a-78v44r5e-g4rth2",
    name: "Saralangan",
    icon: WishesIcon,
    href: "/wishes",
  }, {
    id: "d-78v44r5e-g4rth3",
    name: "Savat",
    icon: CartIcon,
    href: "/cart",
  },
]

const Navbar = () => {

  return (
    <header>
      <div className="bg-[#F0F2F5] py-0.5">
        <div className="containers flex items-center justify-between">
          <div className="flex items-center gap-5">
            <NavbarMap />
            <Link href={"/about/delivery-points"} className="font-medium text-[15px]">Topshirish punktlari</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://seller.uzum.uz/uz?utm_source=uzum_market_main&utm_medium=web&utm_campaign=header_link&_gl=1*146ajhy*_gcl_au*MTUwNDE3MTk0NS4xNzYyNjEzNzQw*_ga*MTI5NjY0MjYyOS4xNzYyNjEzNzQw*_ga_7KCSSWWYYD*czE3NjI3ODI1NTckbzckZzAkdDE3NjI3ODI1NTckajYwJGwwJGgyNzk2NjE4MTU.*_ga_EZ8RKY9S93*czE3NjI3ODI1NTckbzckZzAkdDE3NjI3ODI1NTckajYwJGwwJGgw" className="font-medium text-[15px] text-indigo-500 hover:text-indigo-600 transition-colors">Sotuvchi bo'lish</a>
            <span className="bg-gray-400 w-[1.5px] h-4" />
            <Link href={"/promo/pvz"} className="font-medium text-[15px] text-indigo-500 hover:text-indigo-600 transition-colors">Topshirish punktini ochish</Link>
            <Link href={"/faq"} className="font-medium text-[15px] text-gray-500 hover:text-gray-600 transition-colors" >Savol-Javob</Link>
            <p className="font-medium text-[15px] text-gray-500 hover:text-gray-600 transition-colors">Buyurtmalarim</p>
            <NavbarLanguage />
          </div>
        </div>
      </div>
      <nav className="containers my-2.5 flex items-center justify-between">
        <Link href={'/'}>
          <Image src={uzum_home} alt="This is a picture" className="w-58 h-11" />
        </Link>
        <div>
          dfgh
        </div>
        <div className="flex items-center gap-5">
          {list.map(item => {
            const Icon = item.icon
            return item.href && item.href.trim() !== '' ? (
              <Link key={item.id} href={item.href} className="flex items-center gap-2.5">
                <span><Icon /></span>
                {item.name}
              </Link>
            ) : (
              <div key={item.id} className="flex items-center gap-2.5 cursor-pointer">
                <span><Icon /></span>
                {item.name}
              </div>
            )
          })}


        </div>
      </nav>
    </header>
  )
}

export default Navbar