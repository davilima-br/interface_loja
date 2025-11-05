"use client";

import { UserRound, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

export default function Cabecalio() {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">Urban</div>

      {/* Navegação */}
      <nav className="flex items-center space-x-8 relative">
        {/* Cada item vira um grupo (para o hover funcionar) */}
        {[
          { name: "Home", href: "#" },
          { name: "About Us", href: "#" },
          { name: "Shop Blog ▼", href: "#" },
          { name: "Blog ▼", href: "#" },
          { name: "Pages ▼", href: "#" },
          { name: "GET PRO", href: "#", extraClass: "text-blue-600 font-semibold" },
        ].map((item) => (
          <div key={item.name} className="relative group">
            <Link
              href={item.href}
              className={`text-gray-600 hover:text-blue-500 transition duration-200 ${item.extraClass || ""}`}
            >
              {item.name}
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}

        {/* Ícones */}
        <div className="flex items-center space-x-6">
          {[
            { icon: <Search />, href: "#" },
            { icon: <UserRound />, href: "#" },
            { icon: <ShoppingCart />, href: "https://www.youtube.com" },
          ].map((item, i) => (
            <div key={i} className="relative group cursor-pointer">
              <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                <span className="text-gray-700 hover:text-blue-500 transition duration-200">
                  {item.icon}
                </span>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
