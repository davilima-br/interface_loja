"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";

// Ícones Lucide
import {
  Phone,
  MapPin,
  UserRound,
  CalendarDays,
  ChevronLeft,
  ShoppingCart
} from "lucide-react";

export default function ProdutoPage({ params }: any) {
  const { id } = use(params);

  const [produto, setProduto] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`http://localhost:8000/produtos/${id}`);
        if (!res.ok) throw new Error("Erro no servidor");

        const data = await res.json();
        setProduto(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    }
    load();
  }, [id]);

  if (!produto) return <h1>Carregando...</h1>;

  return (
    <div
      className="relative flex max-lg:flex-col max-lg:items-center max-lg:text-center"
      style={{
        fontFamily: "Times New Roman",
        padding: "5%",
        gap: "8%",
      }}
    >
      {/* 🔙 BOTÃO HOME — VOLTA PARA SHOP */}
      <div className="absolute top-6 left-6 flex items-center">
        <Link href="/shop" className="flex items-center gap-2">
          <ChevronLeft size={30} color="#7A1515" />
          <span className="text-[#7A1515] text-xl font-bold hover:underline">
            shop
          </span>
        </Link>
      </div>

      {/* IMAGEM — 40% */}
      <div
        className="flex flex-col items-center max-lg:w-full"
        style={{
          width: "40%",
          marginLeft: "5%",
        }}
      >
        <iframe
          src={produto.imagem_3d}
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "1 / 1",
          }}
          className="rounded-xl shadow-lg"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        ></iframe>
      </div>

      {/* INFORMAÇÕES — 50% */}
      <div
        className="flex flex-col space-y-10 max-lg:w-full"
        style={{
          width: "50%",
        }}
      >
        <h1
          className="font-bold leading-tight tracking-wide"
          style={{
            fontSize: "3vw",
            color: "#7A1515",
          }}
        >
          {produto.nome}
        </h1>

        <p
          className="text-gray-700 leading-relaxed"
          style={{
            fontSize: "1.2vw",
          }}
        >
          {produto.descricao}
        </p>

        {/* PREÇO */}
        <div className="space-y-2">
          <p
            className="font-bold"
            style={{
              fontSize: "2.5vw",
              color: "#7A1515",
            }}
          >
            R$ {produto.preco}
          </p>
          <p className="text-gray-500" style={{ fontSize: "0.9vw" }}>
            IVA incl.
          </p>
        </div>
/
        {/* ÍCONES INFORMATIVOS */}
        <div
          className="text-gray-800 mt-4"
          style={{
            fontSize: "1.1vw",
            display: "flex",
            flexDirection: "column",
            gap: "1vw",
          }}
        >
          <p className="flex items-center gap-4 cursor-pointer hover:underline">
            <Phone size={26} color="#7A1515" />
            Encomendar por telefone +351 21 020 1688
          </p>

          <p className="flex items-center gap-4 cursor-pointer hover:underline">
            <MapPin size={26} color="#7A1515" />
            Encontrar na boutique
          </p>

          <p className="flex items-center gap-4 cursor-pointer hover:underline">
            <UserRound size={26} color="#7A1515" />
            Contactar um embaixador
          </p>

          <p className="flex items-center gap-4 cursor-pointer hover:underline">
            <CalendarDays size={26} color="#7A1515" />
            Agendar uma visita
          </p>
          {/* 🛒 BOTÃO ADICIONAR AO CARRINHO — COM LUCIDE */}
          <button
  className="botao-carrinho"
  onClick={() => alert('Adicionado ao carrinho!')}
>
  <ShoppingCart size={28} />
  Adicionar ao Carrinho
</button>
        </div>
      </div>
    </div>
  );
}
