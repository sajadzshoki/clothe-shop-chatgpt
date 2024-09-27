import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useContext(CartContext);
  const { user } = useUser();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-xl font-bold hover:text-indigo-400 transition duration-300">
            ClotheShop
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 w-full md:w-auto absolute md:static top-14 left-0 md:left-auto bg-gray-800 md:bg-transparent  shadow-md  px-4 md:px-0 space-y-4 md:space-y-0`}
        >
          <a
            href="/"
            className="block text-lg hover:text-indigo-400 transition duration-300"
          >
            Home
          </a>
          <Link
            to="/blog"
            className="text-lg hover:text-indigo-400 transition duration-300"
          >
            Blog
          </Link>
          <a
            href="/#products"
            className="block text-lg hover:text-indigo-400 transition duration-300"
          >
            Categories
          </a>
          <a
            href="/#contact"
            className="block text-lg hover:text-indigo-400 transition duration-300"
          >
            Contact Us
          </a>
          <Link
            to="/wishlist"
            className="block text-lg hover:text-indigo-400 transition duration-300"
          >
            Wishlist
          </Link>
        </div>

        <div className="flex items-center space-x-6 md:space-x-4">
          {/* Cart Icon with Badge */}
          <Link
            to="/basket"
            className="relative block text-lg hover:text-indigo-400 transition duration-300"
          >
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth Links */}
          {user ? (
            <span className="text-lg font-medium">
              {user.user_metadata?.name || "User"}
            </span>
          ) : (
            <Link to="/auth">
              <button className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 transition duration-300">
                Sign Up / Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
