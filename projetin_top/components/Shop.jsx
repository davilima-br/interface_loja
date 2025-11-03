// app/components/ShopSidebar.tsx
import { ShoppingCart, Search } from 'lucide-react';

export default function ShopSidebar() {
  return (
    <div className="container py-12">
      <div className="flex gap-12">
        {/* Sidebar com filtros */}
        <div className="w-1/4 bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            <li><a href="#">T-Shirts</a></li>
            <li><a href="#">Hoodies</a></li>
            <li><a href="#">Oversized Tees</a></li>
            <li><a href="#">Graphic Tees</a></li>
            <li><a href="#">Zip-Up Hoodies</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Tags</h3>
          <ul className="space-y-3">
            <li><a href="#">Casual Wear</a></li>
            <li><a href="#">Street Style</a></li>
            <li><a href="#">Oversized Fit</a></li>
            <li><a href="#">Cotton Fabric</a></li>
            <li><a href="#">Trendy Designs</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Filter By Price</h3>
          <ul className="space-y-3">
            <li><a href="#">Less than $10</a></li>
            <li><a href="#">$10 - $20</a></li>
            <li><a href="#">$20 - $30</a></li>
            <li><a href="#">$30 - $40</a></li>
            <li><a href="#">$40 - $50</a></li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="w-3/4">
          <h1 className="text-3xl font-bold mb-4">Shop Sidebar</h1>
          <p className="mb-6">Showing 1-9 of 55 results</p>

          <div className="grid grid-cols-3 gap-6">
            {/* Product Cards */}
            <div className="border rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80" alt="Black Hoodie" className="w-full h-64 object-cover mb-4 rounded-lg"/>
              <h3 className="text-lg font-semibold mb-2">Black Hoodie</h3>
              <p className="text-gray-500 mb-4">$95.00</p>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Add to Cart</button>
            </div>
            <div className="border rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80" alt="Graphic T-Shirt" className="w-full h-64 object-cover mb-4 rounded-lg"/>
              <h3 className="text-lg font-semibold mb-2">Graphic T-Shirt</h3>
              <p className="text-gray-500 mb-4">$55.00</p>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Add to Cart</button>
            </div>
            <div className="border rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80" alt="Classic White Tee" className="w-full h-64 object-cover mb-4 rounded-lg"/>
              <h3 className="text-lg font-semibold mb-2">Classic White Tee</h3>
              <p className="text-gray-500 mb-4">$65.00</p>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">Add to Cart</button>
            </div>
            {/* Add more products similarly */}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-8">
            <button className="text-gray-500">← Previous</button>
            <div className="flex gap-2">
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">1</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">2</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">3</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">4</button>
            </div>
            <button className="text-gray-500">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}