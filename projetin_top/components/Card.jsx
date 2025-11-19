"use client";

import { useRef } from "react";

export default function Card3D({ nome, preco, imagem }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) * 30 - 15).toFixed(2);
    const rotateX = -((y / rect.height) * 30 - 15).toFixed(2);

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
    card.classList.add("hovering");
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.classList.remove("hovering");
    card.style.setProperty("--rotateX", "0deg");
    card.style.setProperty("--rotateY", "0deg");
  }

  return (
    <>
      <div className="FundoRelogio">
        <img
          ref={cardRef}
          src={imagem}
          alt={nome}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
        hover-3d
        transition-transform duration-200
      "
          style={{
            width: "auto",
            height: "260px",
            objectFit: "contain",
            cursor: "pointer",
            filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.45))",
            transform: "perspective(800px) rotateX(var(--rotateX)) rotateY(var(--rotateY))",
          }}
        />

        <span className="NomeProduto mt-2 text-center">{nome}</span><br />
        <span className="Preco text-center">R$ {preco}</span>


      </div>
    </>
  );
}
