import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // Icons for mobile menu
import { CartContext } from "../context/CartContext"; // Import CartContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useContext(CartContext);


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
        <button className="md:hidden 0 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 w-full md:w-auto absolute md:static top-14 left-0 md:left-auto bg-gray-900 md:bg-transparent px-4 md:px-0 space-y-4 md:space-y-0`}
        >
          <a
            href="/"
            className="block md:inline-block text-lg hover:text-gray-700"
          >
            Home
          </a>

          <a
            href="/#about"
            className="block md:inline-block text-lg hover:text-gray-700"
          >
            About
          </a>
          <a
            href="/#products"
            className="block md:inline-block text-lg hover:text-gray-700"
          >
            Categories
          </a>
          <a
            href="/#contact"
            className="block md:inline-block text-lg hover:text-gray-700"
          >
            Contact Us
          </a>
          <Link
            to="/wishlist"
            className="block md:inline-block text-lg hover:text-gray-700"
          >
            Wishlist
          </Link>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 w-full md:w-auto absolute md:static top-16 left-0 md:left-auto bg-gray-900 md:bg-transparent px-4 md:px-0 space-y-4 md:space-y-0`}
        >
        

          {/* Cart Icon with Badge */}
          <Link
            to="/basket"
            className="relative block md:inline-block text-lg hover:text-gray-700"
          >
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
