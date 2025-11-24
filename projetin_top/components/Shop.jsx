'use client';

import { useEffect, useState } from "react";
import Card3D from "./Card"; // 👈 importa o seu componente
import Filter from "./Filter"; // Importa o componente Filter

export default function Shop() {
  const [filtro, setFiltro] = useState(""); // Estado para o filtro
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      try {
        const res = await fetch("http://localhost:8000/produtos");
        const data = await res.json();
        setProdutos(data);
        console.log(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProdutos();
  }, []);

  // Filtragem dos produtos com base no filtro

  function filtrarPorPreco(preco, filtro) {
    if (!filtro || filtro.tipo !== "preco") return true;

    const faixa = filtro.valor;

    if (faixa === "Up to $5,000")
      return preco <= 5000;

    if (faixa === "$5,000 - $10,000")
      return preco >= 5000 && preco <= 10000;

    if (faixa === "$10,000 - $20,000")
      return preco >= 10000 && preco <= 20000;

    if (faixa === "$20,000 - $50,000")
      return preco >= 20000 && preco <= 50000;

    if (faixa === "Above $50,000")
      return preco > 50000;

    return true;
  }

  const produtosFiltrados = produtos.filter((p) => {
    if (!filtro) return true

    if (typeof filtro === 'object' && filtro.tipo === 'preco') {
      return filtrarPorPreco(Number(p.preco), filtro)
    }
    return (
      p.categoria.toLowerCase().includes(filtro.toLowerCase()) ||
      p.cor.toLowerCase().includes(filtro.toLowerCase()) ||
      p.preco.toLowerCase().includes(filtro.toLowerCase())
    )
  }
  );

  return (
    <div className="min-h-screen flex bg-gray-50 ">
      {/* MENU LATERAL */}
      <aside className="w-64 bg-white p-6 border-r border-gray-200 hidden md:block sticky top-0 h-screen overflow-y-auto">
        <Filter setFiltro={setFiltro} /> {/* Passa a função setFiltro para o Filter */}
      </aside>

      {/* GRID DE PRODUTOS */}
      <main className="flex-1 p-8 bg-[#e2e2e2]" ><br /><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtosFiltrados.map((p) => (
            <a key={p.id} href={`/shop/${p.id}`}>
              <Card3D
                key={p.id}
                nome={p.nome}
                preco={p.preco}
                imagem={p.imagem}
              />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
