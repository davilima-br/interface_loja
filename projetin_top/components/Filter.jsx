'use client';

import { useState } from "react";
import { Check } from "lucide-react";

const Filter = ({ setFiltro }) => {
  const [selected, setSelected] = useState({ categories: [], tags: [], price: [] });

  const boxBase =
    "w-4 h-4 border-2 rounded-sm mr-2 flex items-center justify-center transition-all duration-300";

  const handleCategoryToggle = (category) => {
    const newSelected = { ...selected };
    const categoryIndex = newSelected.categories.indexOf(category);

    if (categoryIndex > -1) {
      newSelected.categories.splice(categoryIndex, 1);
    } else {
      newSelected.categories.push(category);
    }

    setSelected(newSelected);
    setFiltro({ ...newSelected });
  };

  const handleTagToggle = (tag) => {
    const newSelected = { ...selected };
    const tagIndex = newSelected.tags.indexOf(tag);

    if (tagIndex > -1) {
      newSelected.tags.splice(tagIndex, 1);
    } else {
      newSelected.tags.push(tag);
    }

    setSelected(newSelected);
    setFiltro({ ...newSelected });
  };

  const handlePriceToggle = (priceRange) => {
    const newSelected = { ...selected };
    const priceIndex = newSelected.price.indexOf(priceRange);

    if (priceIndex > -1) {
      newSelected.price.splice(priceIndex, 1);
    } else {
      newSelected.price.push(priceRange);
    }

    setSelected(newSelected);
    setFiltro({ ...newSelected });
  };

  return (
    <aside className="w-full max-w-xs h-[100%] space-y-10 pl-[5px] pr-3 text-gray-900 bg-[#ffffff] font-times">

      {/* Categories */}
      <div className="transition-transform duration-200 hover:translate-x-1"><br /><br />
        <h3 className="font-normal text-center mx-auto mb-4 text-lg bg-[#9b1b1b] text-white w-[90%] p-4 rounded">
          Categories
        </h3>

        <ul className="space-y-4 ">
          {["Casual", "Formal"].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => handleCategoryToggle(item)}
            >
              <span
                className={`${boxBase} ${selected.categories.includes(item) ? "bg-[#9b1b1b] border-[#9b1b1b]" : "bg-transparent border-black"} hover:border-[#9b1b1b]`}
              >
                {selected.categories.includes(item) && <Check className="text-white text-sm" />}
              </span>

              <span className="font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="transition-transform duration-200 hover:translate-x-1">
        <h3 className="font-normal text-center mx-auto mb-4 text-lg bg-[#9b1b1b] text-white w-[90%] p-4 rounded">
          Tags
        </h3>

        <ul className="space-y-4">
          {["Verde", "Preto", "Azul", "Azul Claro", "Branco", "Marfim"].map(item => (
            <li
              key={item}
              className="cursor-pointer flex items-center"
              onClick={() => handleTagToggle(item)}
            >
              <span
                className={`${boxBase} ${selected.tags.includes(item) ? "bg-[#9b1b1b] border-[#9b1b1b]" : "bg-transparent border-black"} hover:border-[#9b1b1b]`}
              >
                {selected.tags.includes(item) && <Check className="text-white text-sm" />}
              </span>

              <span className="font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter By Price */}
      <div className="transition-transform duration-200 hover:translate-x-1">
        <h3 className="font-normal text-center mx-auto mb-4 text-lg bg-[#9b1b1b] text-white w-[90%] p-4 rounded">
          Filter By Price
        </h3>

        <ul className="space-y-6">
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
              onClick={() => handlePriceToggle(item)}
            >
              <span
                className={`${boxBase} ${selected.price.includes(item) ? "bg-[#9b1b1b] border-[#9b1b1b]" : "bg-transparent border-black"} hover:border-[#9b1b1b]`}
              >
                {selected.price.includes(item) && <Check className="text-white text-sm" />}
              </span>

              <span className="font-normal">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
