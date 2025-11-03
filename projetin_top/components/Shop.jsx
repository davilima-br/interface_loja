"use client";

import { useState } from 'react';
import { Search, ChevronDown, Tag, Filter, List } from 'lucide-react';

export default function ShopSidebar() {
  const [sort, setSort] = useState('default');

  const products = [
    { name: 'Black Hoodie', price: 95, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3d3b' },
    { name: 'Graphic T-Shirt', price: 55, img: 'https://images.unsplash.com/photo-1618354691373-d850e6d7e1e9' },
    { name: 'Classic White Tee', price: 65, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f' },
    { name: 'Oversized Hoodie', price: 50, img: 'https://images.unsplash.com/photo-1602810318255-0fe51b0b45c0' },
    { name: 'Cotton T-Shirt', price: 70, img: 'https://images.unsplash.com/photo-1593032465171-8b1f5a0b9f1f' },
    { name: 'Zip-Up Hoodie', price: 95, img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30' },
    { name: 'Printed T-Shirt', price: 55, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f' },
    { name: 'Crewneck Sweatshirt', price: 65, img: 'https://images.unsplash.com/photo-1618354691373-d850e6d7e1e9' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b">
        <h1 className="text-2xl font-bold tracking-tight">Urban</h1>
        <nav className="flex items-center space-x-8 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Pages</a>
          <a href="#" className="text-blue-600 font-semibold">GET PRO</a>
        </nav>
      </header>

      {/* Title */}
      <div className="text-center py-14">
        <h2 className="text-5xl font-extrabold tracking-widest">Shop-Sidebar</h2>
        <p className="text-gray-500 mt-2">Home / Shop-Sidebar</p>
      </div>

      <div className="grid grid-cols-12 gap-8 px-10 pb-20">
        {/* Sidebar */}
        <aside className="col-span-3 border-r pr-8">
          <div className="mb-8">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full border p-3 pr-10 rounded-lg focus:ring-2 focus:ring-gray-300" />
              <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Categories Section */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <List className="w-4 h-4 mr-2 text-gray-700" />
              <h3 className="font-semibold text-lg">Categories</h3>
            </div>
            <ul className="space-y-2">
              {['T-Shirts', 'Hoodies', 'Oversized Tees', 'Graphic Tees', 'Zip-Up Hoodies'].map((item, i) => (
                <li key={i} className="group cursor-pointer text-gray-700 hover:text-black transition flex justify-between items-center border-b border-gray-100 py-1">
                  <span>{item}</span>
                  <span className="text-gray-400 group-hover:text-black">→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Section */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <Tag className="w-4 h-4 mr-2 text-gray-700" />
              <h3 className="font-semibold text-lg">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Casual Wear', 'Street Style', 'Oversized Fit', 'Cotton Fabric', 'Trendy Designs'].map((tag, i) => (
                <span key={i} className="px-3 py-1 text-sm border rounded-full text-gray-600 hover:bg-black hover:text-white transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Filter By Price */}
          <div>
            <div className="flex items-center mb-3">
              <Filter className="w-4 h-4 mr-2 text-gray-700" />
              <h3 className="font-semibold text-lg">Filter By Price</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              {['Less than $10', '$10 - $20', '$20 - $30', '$30 - $40', '$40 - $50'].map((range, i) => (
                <li key={i} className="cursor-pointer hover:text-black transition">
                  {range}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product grid */}
        <main className="col-span-9">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 text-sm">Showing 1–9 of 55 results</p>
            <div className="flex items-center text-sm border p-2 rounded cursor-pointer hover:bg-gray-50">
              Default sorting <ChevronDown className="ml-1 w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="group text-center">
                <div className="overflow-hidden rounded-md shadow-md">
                  <img src={product.img} alt={product.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold mt-3">{product.name}</h3>
                <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button key={page} className={`px-3 py-1 border ${page === 1 ? 'bg-black text-white' : 'hover:bg-gray-200'}`}>
                {page}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg text-sm cursor-pointer hover:bg-blue-800">
        Get it Now
      </div>
    </div>
  );
}