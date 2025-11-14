"use client";

import { useState } from "react";
import Card3D from "./Card"; // 👈 importa o seu componente

export default function Shop() {
  const [filtro, setFiltro] = useState("");

  const produtos = [
    { nome: "Relógio Eclipse", preco: "R$ 2.499,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Solaris", preco: "R$ 1.899,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Titan", preco: "R$ 3.299,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Horizon", preco: "R$ 2.799,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Nova", preco: "R$ 1.599,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Chronos", preco: "R$ 4.199,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png"},
    { nome: "Relógio Aurora", preco: "R$ 2.099,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Vector", preco: "R$ 3.899,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
    { nome: "Relógio Mirage", preco: "R$ 2.299,00", imagem: "https://www.grand-seiko.com/br-pt/-/media/Images/Product--Image/All/GrandSeiko/2022/02/19/22/07/SBGJ251G/SBGJ251G.png" },
  ];

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
