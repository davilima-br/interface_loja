"use client";

import { useState } from "react";
import Card3D from "./Card"; // 👈 importa o seu componente

export default function Shop() {
  const [filtro, setFiltro] = useState("");

  const produtos = [
    { nome: "Relógio Eclipse", preco: "R$ 2.499,00", imagem: "https://source.unsplash.com/400x600/?watch,luxury" },
    { nome: "Relógio Solaris", preco: "R$ 1.899,00", imagem: "https://source.unsplash.com/400x600/?watch,modern" },
    { nome: "Relógio Titan", preco: "R$ 3.299,00", imagem: "https://source.unsplash.com/400x600/?watch,classic" },
    { nome: "Relógio Horizon", preco: "R$ 2.799,00", imagem: "https://source.unsplash.com/400x600/?watch,design" },
    { nome: "Relógio Nova", preco: "R$ 1.599,00", imagem: "https://source.unsplash.com/400x600/?watch,fashion" },
    { nome: "Relógio Chronos", preco: "R$ 4.199,00", imagem: "https://source.unsplash.com/400x600/?watch,men" },
    { nome: "Relógio Aurora", preco: "R$ 2.099,00", imagem: "https://source.unsplash.com/400x600/?watch,women" },
    { nome: "Relógio Vector", preco: "R$ 3.899,00", imagem: "https://source.unsplash.com/400x600/?watch,steel" },
    { nome: "Relógio Mirage", preco: "R$ 2.299,00", imagem: "https://source.unsplash.com/400x600/?watch,leather" },
  ];

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 hidden md:block">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>
        <input
          type="text"
          placeholder="Buscar produto..."
          className="w-full border rounded-lg px-3 py-2 mb-6 focus:ring-2 focus:ring-gray-300"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <div className="space-y-3 text-gray-700">
          <label className="block">
            <input type="checkbox" className="mr-2" /> Masculino
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Feminino
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Luxo
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Casual
          </label>
        </div>
      </aside>

      {/* GRID DE PRODUTOS */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
          Catálogo de Relógios
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((produto, index) => (
            <Card3D
              key={index}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
