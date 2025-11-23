"use client";

import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-['#e2e2e2'] from-gray-50 to-gray-100 text-gray-900 font-serif"><br /><br />

      {/* PRODUCT SECTION */}
      <div className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-16">

        {/* SKETCHFAB 3D MODEL */}
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-white ">
          <iframe
            title="Grand Seiko SBGJ235"
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            className="w-full h-[500px]"
            src="https://sketchfab.com/models/b2b77d60fbe44ba8afcceb5502b41ef8/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0"
          ></iframe>
        </div>

        {/* PRODUCT DETAILS */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Grand Seiko SBGJ235</h2><br />

          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold text-[#7a1515]">$540.00</span>
            <span className="text-xl text-gray-400 line-through">$640.00</span>
          </div>

          <div className="mt-2 flex items-center">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-gray-500 text-sm ml-2">(120 reviews)</span>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Um relógio elegante com construção premium, motor de alta precisão
            e acabamento impecável. Perfeito para colecionadores e apaixonados
            por horologia.
          </p><br />

          {/* Quantidade */}
          <div className="mt-6">
            <label className="font-medium text-gray-800">Quantity:  </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="ml-4 w-20 px-4 py-2 border rounded-[10px] shadow-sm focus:ring-2 focus:ring-[#7a1515] transition-all"
            />
          </div>

          {/* ADD TO CART */}
          <button
            className="mt-8 bg-[#7a1515] text-white px-10 py-4 rounded-[5px] shadow-lg 
            hover:bg-blue-500 hover:shadow-2xl pd-[10px]"
          >
            Comprar
          </button><br /><br />

          {/* EXTRA INFO */}
          <div className="mt-6 text-gray-600 text-sm space-y-1">
            <p><b>SKU:</b> GS-235-LUX</p>
            <p><b>Category:</b> Watches</p>
            <p><b>Tags:</b> Luxury, Automatic, Japanese, Steel</p>
          </div>
        </div>

      </div><br /><br />

      {/* TABS */}
      <div className="container mx-auto px-10 mt-10">
        <div className="flex gap-8 border-b pb-3 text-lg font-medium">
          {["Description", "Additional Info", "Shipping", "Reviews"].map((t) => (
            <button
              key={t}
              className="pb-2 border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              {t}
            </button>
          ))}
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          Este Grand Seiko apresenta um calibre automático de altíssima precisão,
          design moderno e vidro de safira anti-risco. Perfeito para quem busca
          sofisticação e desempenho premium.
        </p>
      </div><br /><br />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-20 py-16 text-center">
        <h3 className="text-2xl font-semibold">Get offers & discounts</h3>
        <p className="text-gray-300 mt-2">Subscribe to our exclusive newsletter</p>

        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Your email..."
            className="p-3 w-72 rounded-l-xl text-gray-900 focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-[#7a1515] px-6 rounded-r-xl hover:bg-blue-500 transition-all">
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}
