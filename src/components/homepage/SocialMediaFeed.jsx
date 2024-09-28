// src/components/SocialMediaFeed.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// const socialMediaLinks = [
//   { icon: <FaFacebook size={30} />, link: 'https://facebook.com' },
//   { icon: <FaTwitter size={30} />, link: 'https://twitter.com' },
//   { icon: <FaInstagram size={30} />, link: 'https://instagram.com' },
//   { icon: <FaPinterest size={30} />, link: 'https://pinterest.com' },
//   { icon: <FaLinkedin size={30} />, link: 'https://linkedin.com' },
// ];

const SocialMediaFeed = () => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-2xl font-bold mb-6">Follow Us on Social Media</h2>
      <div className="flex  space-x-4 p-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="text-blue-600 hover:text-blue-800 transition duration-300" size={30} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 hover:text-blue-600 transition duration-300" size={30} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-600 hover:text-pink-800 transition duration-300" size={30} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="text-blue-700 hover:text-blue-900 transition duration-300" size={30} />
      </a>
    </div>
    </div>
  );
};

export default SocialMediaFeed;
