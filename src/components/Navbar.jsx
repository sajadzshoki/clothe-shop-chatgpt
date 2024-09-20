// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-lg font-bold">ClotheShop</div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden 0 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6  w-full md:w-auto absolute md:static top-16 left-0 md:left-auto bg-gray-900 md:bg-transparent px-4 md:px-0 space-y-4 md:space-y-0`}
        >
          <a className="block md:inline-block text-lg hover:text-gray-700">
            <Link to="/">Home</Link>
          </a>
          <a href="#about" className="block md:inline-block text-lg hover:text-gray-700">
            About
          </a>
          <a href="#products" className="block md:inline-block text-lg hover:text-gray-700">
            Categories
          </a>
          <a href="#contact" className="block md:inline-block text-lg hover:text-gray-700">
            Contact Us
          </a>

          <a className="block md:inline-block text-lg hover:text-gray-700">
            <Link to="/basket">Basket</Link>
          </a>
        </div>
        <div className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6  w-full md:w-auto absolute md:static top-16 left-0 md:left-auto bg-gray-900 md:bg-transparent px-4 md:px-0 space-y-4 md:space-y-0`}>
          <input
            type="text"
            placeholder="Search products..."
            className="bg-white text-black px-2 py-1 rounded focus:outane-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
