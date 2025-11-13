"use client";
import React, { useRef } from "react";

export default function Card3D() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hover-3d"
    >
      <figure className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        <img
          src="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="3D card"
          className="w-full h-auto"
        />
        <div className="card-body">
          <div className="card-actions justify-end">
          </div>
        </div>
      </figure>
    </div>
  );
}
