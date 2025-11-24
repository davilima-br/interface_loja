'use client';

import { useEffect, useState } from "react";
import Card3D from "./Card";
import Filter from "./Filter";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [filtros, setFiltros] = useState({
    categories: [],
    tags: [],
    price: []
  });

  const [showSidebar, setShowSidebar] = useState(false); // 👈 controla abertura

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function loadProdutos() {
      try {
        const res = await fetch("http://localhost:8000/produtos");
        const data = await res.json();
        setProdutos(data);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    }

    loadProdutos();
  }, []);

  function filtrarPorPreco(preco, priceFilters) {
    if (!priceFilters.length) return true;

    return priceFilters.some(faixa => {
      if (faixa === "Up to $5,000") return preco <= 5000;
      if (faixa === "$5,000 - $10,000") return preco >= 5000 && preco <= 10000;
      if (faixa === "$10,000 - $20,000") return preco >= 10000 && preco <= 20000;
      if (faixa === "$20,000 - $50,000") return preco >= 20000 && preco <= 50000;
      if (faixa === "Above $50,000") return preco > 50000;
      return true;
    });
  }

  const produtosFiltrados = produtos.filter((p) => {
    const categoria = p.categoria ?? "";
    const cor = p.cor ?? "";
    const preco = Number(p.preco ?? 0);

    const categoriaOk =
      filtros.categories.length === 0 ||
      filtros.categories.includes(categoria);

    const tagOk =
      filtros.tags.length === 0 ||
      filtros.tags.some(t => t.toLowerCase() === cor.toLowerCase());

    const precoOk = filtrarPorPreco(preco, filtros.price);

    return categoriaOk && tagOk && precoOk;
  });

  return (
    <div className="min-h-screen flex bg-gray-50 relative">

      {/* BOTÃO ABRIR SIDEBAR - APARECE NO MOBILE E DESKTOP */}
      <button
        className="fixed top-35 left-30 z-50 flex items-center gap-4 bg-[#9b1b1b] text-white px-12 py-5 text-xl rounded-lg shadow-lg hover:bg-[#7f1515] transition"
        onClick={() => setShowSidebar(true)}
      >
        <SlidersHorizontal size={24} />
        Filtros
      </button>


      {/* OVERLAY ESCURO */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* SIDEBAR SLIDE-IN */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-6 border-r border-gray-200
          transform transition-transform duration-300
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 mb-5 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          onClick={() => setShowSidebar(false)}
        >
          ✕ Fechar
        </button>


        <Filter setFiltro={setFiltros} />
      </aside>

      {/* GRID DE PRODUTOS */}
      <main className="flex-1 p-8 mt-20 bg-[#e2e2e2] flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-25">
          {produtosFiltrados.map((p) => (
            <a key={p.id} href={`/shop/${p.id}`}>
              <Card3D nome={p.nome} preco={p.preco} imagem={p.imagem} />
            </a>
          ))}
        </div>
      </main>

    </div>
  );
}
