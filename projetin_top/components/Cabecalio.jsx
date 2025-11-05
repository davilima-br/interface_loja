"use client";

import { UserRound, ShoppingCart, Search, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export default function Cabecalio() {
  return (
    <header className="flex flex-col items-center justify-center bg-white py-4 border-b border-gray-200 relative">
      {/* Logo */}
      <div className="text-4xl italic font-serif mt-2 mb-3 tracking-wide absolute top-3">
        Cartirê
      </div>
      <br />
      <br />

      {/* Menu de navegação */}
      <nav className="flex items-center justify-center space-x-8 text-[13px] text-gray-800 font-medium tracking-wide">
        {[
          "ALTA JOALHERIA",
          "JOALHERIA",
          "RELÓGIOS",
          "BOLSAS E ACESSÓRIOS",
          "PERFUMES",
          "ART DE VIVRE",
          "A MAISON",
          "NEWS",
        ].map((item) => (
          <Link
            key={item}
            href=""
            className="relative group hover:text-black transition duration-200 no-underline"
          >
            {item}
            {/* Linha inferior animada */}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#B30000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}

        {/* Barra e ícone de busca */}
        <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
          <Search size={20} className="text-gray-700 hover:text-[#B30000] cursor-pointer" />
        </div>

        {/* Ícones lado direito */}
        <div className="flex items-center space-x-4 text-gray-700">
          <MapPin size={20} className="cursor-pointer hover:text-[#B30000]" />
          <Heart size={20} className="cursor-pointer hover:text-[#B30000]" />
          <UserRound size={20} className="cursor-pointer hover:text-[#B30000]" />
          <ShoppingCart size={20} className="cursor-pointer hover:text-[#B30000]" />
        </div>
      </nav>
    </header>
  );
}
