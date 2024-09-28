// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchUnsplashImages } from '../../services/unsplashService'; // Your utility to fetch images

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await fetchUnsplashImages('Clothing', 5); // Fetch 5 images related to fashion
      setImages(fetchedImages);
    };

    fetchImages();
    
    // Change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  if (images.length === 0) return <div>Loading...</div>;

  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <img
        src={images[currentIndex]?.urls?.regular}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Discover the Latest Fashion Trends</h1>
        <p className="text-lg md:text-xl mb-4">Shop the most stylish outfits of the season.</p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate(`/category/:${currentIndex}`)} // Navigate to the categories page
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
