// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">ClotheShop</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#contact" className="hover:text-gray-400">Contact Us</a>
        </div>
        <div>
          <input 
            type="text" 
            placeholder="Search products..." 
            className="bg-white text-black px-2 py-1 rounded focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
