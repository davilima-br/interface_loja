"use client";

import { useEffect, useState } from "react";
import Card3D from "./Card"; // 👈 importa o seu componente

export default function Shop() {
  const [filtro, setFiltro] = useState("");
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    async function loadProdutos() {
      try {
        const res = await fetch("http://localhost:8000/produtos");
        const data = await res.json();
        setProdutos(data);
        console.log(data)
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }
  
    loadProdutos();
  }, []);
  
  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-50 ">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 hidden md:block ">
        
      </aside>

      {/* GRID DE PRODUTOS */}
      <main className="flex-1 p-8"><br /><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((p, index) => (
            <Card3D
              key={p.id}
              nome={p.nome}
              preco={p.preco}
              imagem={p.imagem_url}
            />
          ))}
          
        </div>
      </main>
    </div>
  );
}
