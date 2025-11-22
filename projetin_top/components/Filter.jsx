'use client';

import { useState } from "react";
import { Check } from "lucide-react"; // Importing Check icon

const Filter = ({ setFiltro }) => {
  const [selected, setSelected] = useState("");

  const boxBase =
    "w-4 h-4 border-2 rounded-sm mr-2 flex items-center justify-center transition-all duration-300";

  return (
    <aside className="w-full max-w-xs h-[100%] space-y-6 text-gray-900 bg-[#e2e2e2] font-times">

      {/* Categories */}
      <div>
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Categories
        </h3>

        <ul className="space-y-1">
          {[
            "Casual",
            "Formal"
          ].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => {
                setFiltro(item);
                setSelected(item);
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
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Tags
        </h3>

        <ul className="space-y-1">
          {[
            "Green",
            "Black",
            "Blue",
            "Light Blue",
            "White",
            "Ivory"
          ].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => {
                setFiltro(item);
                setSelected(item);
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
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Filter by Price */}
      <div>
        <h3 className="font-bold mb-2 text-lg bg-[#9b1b1b] text-white w-[90%] p-2 rounded">
          Filter By Price
        </h3>

        <ul className="space-y-1">
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
                setFiltro(item);
                setSelected(item);
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
              {item}
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default Filter;
