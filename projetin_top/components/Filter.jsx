'use client';

const Filter = ({ setFiltro }) => {
  return (
    <aside className="w-full max-w-xs h-[100%] p-8 space-y-6 text-gray-900 bg-[#e2e2e2] font-times">
     
      {/* Categories */}
      <div>
        <h3 className="font-bold mb-2 text-lg">Categories</h3>
        <ul className="space-y-1">
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('T-Shirts')}>T-Shirts</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Hoodies')}>Hoodies</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Oversized Tees')}>Oversized Tees</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Graphic Tees')}>Graphic Tees</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Zip-Up Hoodies')}>Zip-Up Hoodies</li>
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bold mb-2 text-lg">Tags</h3>
        <ul className="space-y-1">
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Casual Wear')}>Casual Wear</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Street Style')}>Street Style</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Oversized Fit')}>Oversized Fit</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Cotton Fabric')}>Cotton Fabric</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Trendy Designs')}>Trendy Designs</li>
        </ul>
      </div>

      {/* Filter by Price */}
      <div>
        <h3 className="font-bold mb-2 text-lg">Filter By Price</h3>
        <ul className="space-y-1">
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('Less than $10')}>Less than $10</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('$10 - $20')}>$10 - $20</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('$20 - $30')}>$20 - $30</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('$30 - $40')}>$30 - $40</li>
          <li className="cursor-pointer hover:underline" onClick={() => setFiltro('$40 - $50')}>$40 - $10000</li>
        </ul>
      </div>

    </aside>
  );
};

export default Filter;
