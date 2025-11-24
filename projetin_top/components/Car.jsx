"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
    const [carrinho, setCarrinho] = useState([]);
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        let s = localStorage.getItem("sessao_id");
        if (!s) {
            s = crypto.randomUUID();
            localStorage.setItem("sessao_id", s);
        }
        setSessionId(s);
    }, []);

    useEffect(() => {
        if (!sessionId) return;

        async function loadCart() {
            const res = await fetch(`http://localhost:8000/carrinho?sessao_id=${sessionId}`);
            const data = await res.json();
            setCarrinho(data);
        }

        loadCart();
    }, [sessionId]);

    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    async function AtualizaQtd(itemId, novaQtd) {
        try {
            const res = await fetch(`http://localhost:8000/carrinho/${itemId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantidade: novaQtd, sessao_id: sessionId }),
            });

            if (!res.ok) throw new Error("Erro ao atualizar quantidade");

            const updated = await fetch(`http://localhost:8000/carrinho?sessao_id=${sessionId}`);
            const data = await updated.json();
            setCarrinho(data);
        } catch (err) {
            console.error(err);
            alert("Erro ao atualizar quantidade");
        }
    }

    async function gerarPix() {
        try {
            const res = await fetch("http://localhost:8000/pix", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ valor: total }),
            });

            const data = await res.json();

            const novaJanela = window.open("", "_blank");
            novaJanela.document.write(`
                <h2 style="font-family: Arial; text-align: center;">Pagamento PIX</h2>
                <p style="text-align: center;">Escaneie o QR Code para pagar</p>
                <div style="display:flex; justify-content:center;">
                    <img src="${data.qrCode}" style="width:280px"/>
                </div>
                <p style="margin-top:15px;">Copia e cola:</p>
                <textarea style="width:100%; height:120px">${data.payload}</textarea>
            `);
        } catch (err) {
            console.error(err);
            alert("Erro ao gerar PIX");
        }
    }

    return (
        <div className="w-[90%] mx-auto py-12 space-y-12 font-serif">

            {/* TITLE */}
            <div className="text-center space-y-2"><br />
                <h1 className="text-4xl font-bold text-[#7A1515] tracking-wide">
                    Shopping Cart
                </h1>
            </div><br />

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT SIDE */}
                <div className="col-span-2 bg-white p-10 rounded-2xl shadow-lg border border-gray-100 space-y-10">

                    {carrinho.map(item => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center gap-8 pb-10 border-b border-gray-200"
                        >
                            <img
                                src={item.imagem}
                                alt={item.nome}
                                className="w-32 sm:w-28 rounded-xl shadow-md"
                            />

                            <div className="flex-1 space-y-1">
                                <h3 className="text-2xl font-bold text-gray-800">{item.nome}</h3>
                                <p className="text-gray-500 text-lg">${item.preco}</p>
                            </div>

                            <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
                                <button
                                    className="px-4 py-2 text-xl font-bold rounded-lg hover:bg-gray-200 transition"
                                    onClick={() =>
                                        item.quantidade > 1 && AtualizaQtd(item.id, item.quantidade - 1)
                                    }
                                >
                                    –
                                </button>

                                <span className="text-xl font-semibold">{item.quantidade}</span>

                                <button
                                    className="px-4 py-2 text-xl font-bold rounded-lg hover:bg-gray-200 transition"
                                    onClick={() => AtualizaQtd(item.id, item.quantidade + 1)}
                                >
                                    +
                                </button>
                            </div>

                            <div className="text-right w-28 font-bold text-xl text-gray-800">
                                ${(item.preco * item.quantidade).toFixed(2)}
                            </div>
                        </div>
                    ))}

                </div>

                {/* RIGHT SIDE — deslocado para a direita */}
                <div className="rounded-xl shadow p-8 space-y-8 bg-white w-full lg:w-[90%] justify-self-end">
                    <h2 className="text-2xl text-[#7A1515]">Order Summary</h2>

                    <div className="flex justify-between text-lg border-b border-gray-200 pb-4 font-semibold">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>

                    <br /><br /><br />

                    <div className="flex gap-4">
                        <button 
                            onClick={() => window.location.assign("/shop")}
                            className="w-1/1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                        >
                            Continue Shopping
                        </button>
                    </div>

                    <button
                        className="w-full bg-red-700 text-white py-4 rounded-lg text-lg hover:bg-red-800"
                        onClick={gerarPix}
                    >
                        Proceed to Checkout
                    </button>
                </div>

            </div>
        </div>
    );
}
