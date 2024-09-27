/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 "id="about">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ClotheShop</h3>
          <p className="text-gray-400">
            Minimalist fashion, designed to make you look and feel your best.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#products" className="hover:text-gray-400">Products</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} ClotheShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
