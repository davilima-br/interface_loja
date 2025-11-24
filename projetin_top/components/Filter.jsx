'use client';

import { useState } from "react";
import { Check } from "lucide-react";

const Filter = ({ setFiltro }) => {
  const [selected, setSelected] = useState("");

  const boxBase =
    "w-4 h-4 border-2 rounded-sm mr-2 flex items-center justify-center transition-all duration-300";

  return (
    <aside className="w-full max-w-xs h-[100%] space-y-2 text-gray-900 bg-[#e2e2e2] font-times">

      {/* Categories */}
      <div className="transition-transform duration-200 hover:translate-x-1">
        <br /><br />
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Categories
        </h3>

        <ul className="space-y-2">
          {["Casual", "Formal"].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => {
                if (selected === item) {
                  setSelected("");
                  setFiltro("");
                } else {
                  setSelected(item);
                  setFiltro(item);
                }
              }}
            >
              <span
                className={`${boxBase} ${
                  selected === item
                    ? "bg-[#9b1b1b] border-[#9b1b1b]"
                    : "bg-transparent border-black"
                } hover:border-[#9b1b1b]`}
              >
                {selected === item && <Check className="text-white text-sm" />}
              </span>

              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="transition-transform duration-200 hover:translate-x-1">
        <br />
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Tags
        </h3>

        <ul className="space-y-2">
  {["Verde", "Preto", "Azul", "Azul Claro", "Branco", "Marfim"].map(item => (
    <li
      key={item}
      className="cursor-pointer flex items-center"
      onClick={() => {
        if (selected === item) {
          setSelected("");
          setFiltro("");
        } else {
          setSelected(item);
          setFiltro(item); // <-- envia a cor correta para o filtro
        }
      }}
    >
      <span
        className={`${boxBase} ${
          selected === item
            ? "bg-[#9b1b1b] border-[#9b1b1b]"
            : "bg-transparent border-black"
        } hover:border-[#9b1b1b]`}
      >
        {selected === item && <Check className="text-white text-sm" />}
      </span>

      <span className="font-bold">{item}</span>
    </li>
  ))}
</ul>

      </div>

      {/* Filter by Price */}
      <div className="transition-transform duration-200 hover:translate-x-1">
        <br />
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Filter By Price
        </h3>

        <ul className="space-y-2">
          {[
            "Up to $5,000",
            "$5,000 - $10,000",
            "$10,000 - $20,000",
            "$20,000 - $50,000",
            "Above $50,000"
          ].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => {
                if (selected === item) {
                  setSelected("");
                  setFiltro("");
                } else {
                  setSelected(item);
                  setFiltro({tipo: 'preco', valor: item});
                }
              }}
            >
              <span
                className={`${boxBase} ${
                  selected === item
                    ? "bg-[#9b1b1b] border-[#9b1b1b]"
                    : "bg-transparent border-black"
                } hover:border-[#9b1b1b]`}
              >
                {selected === item && <Check className="text-white text-sm" />}
              </span>

              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default Filter;
