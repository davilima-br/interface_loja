"use client";

import { useEffect, useState } from "react";

export default function ProdutoPage({ params }: any) {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function load() {
      // Aguardando 'params'
      const { id } = await params; // Aqui aguardamos 'params'

      try {
        const res = await fetch(`http://localhost:8000/produtos/${id}`);
        
        if (!res.ok) {
          throw new Error('Erro na resposta do servidor');
        }
        
        const data = await res.json();
        setProduto(data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
      }
    }

    load();
  }, [params]); // Ajustado para que a effect rode toda vez que 'params' muda

  if (!produto) return <h1>Carregando...</h1>;

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <img src={produto.imagem_url} width={300} />
    </div>
  );
}
