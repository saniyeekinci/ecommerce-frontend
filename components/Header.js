"use client";

import Image from "next/image";
import Filter from "./Filter";
import { CircleUserRound, Package2, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";


const Header = () => {
    const [acikMi, setAcikMi] = useState(false);

  // Referanslar
  const searchRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Eğer tıklama search input veya filter içinde değilse kapat
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        filterRef.current &&
        !filterRef.current.contains(event.target)
      ) {
        setAcikMi(false);
      }
    }

    // Document click event ekle
    document.addEventListener("click", handleClickOutside);

    // Temizlik yap
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex  items-center space-around p-5 space-x-4 relative">
        <a href="/">
          <Image src="/logo.webp" alt="Logo" height={120} width={120} />
        </a>
        <div className="group relative text-[12px] items-center justify-center font-bold ">
          <a href="#" className="flex  space-x-2">
            <Image
              src="/category.svg"
              alt="category"
              height={20}
              width={20}
              className="stroke-gray-300"
            />
            <span className="text-[#5c5b5b]">Kategoriler</span>
          </a>

          <div className="absolute hidden group-hover:flex bg-white shadow-lg rounded-lg p-4 space-y-2 flex-col">
            <a href="#">A</a>
            <a href="#">B</a>
            <a href="#">C</a>
          </div>
        </div>

      <form
          className="flex items-center flex-col space-x-2"
          onClick={(e) => {
            e.preventDefault();
            setAcikMi(true);
          }}
          ref={searchRef}
        >
          <div className="flex items-center bg-[#f1f1f1] px-3 py-2 rounded-4xl space-x-2">
            <Image src="/search.svg" alt="search" height={18} width={18} />
            <input
              type="text"
              placeholder="Ürün, kategori veya marka ara"
              className="w-230 focus:outline-none text-[12px] text-[#a8a9b0] p-1"
            />
          </div>
        </form>

       {acikMi && (
  <div  className="absolute top-full mt-2 left-[25%] z-50 w-[100%]"  ref={filterRef}>
    <Filter />
  </div>
)}



        <a
          href="#"
          className="relative flex items-center space-x-2 text-[12px] font-bold"
        >
          <ShoppingCart className="text-[#9a9a9a]" size={24} />
          <span className="text-[#5c5b5b]">Sepetim</span>
          <div className="absolute left-3.5 bottom-3 rounded-full px-1.5 bg-[#F55C0A] text-white">
            2
          </div>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-[12px] font-bold"
        >
          <Package2 className="text-[#9a9a9a]" size={24} />
          <span className="text-[#5c5b5b]">Siparişlerim</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-[12px] font-bold"
        >
          <CircleUserRound className="text-[#9a9a9a]" size={24} />
          <span className="text-[#5c5b5b]">Hesabım</span>
        </a>
      </header>

      
    </>
  );
};

export default Header;
