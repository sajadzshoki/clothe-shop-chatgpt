// src/components/HeroSlider.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=t-shirt&client_id=MsEJqj7fxtDzBjghuqVTrvL0mSuAljzoZ2lkl9LC7qo&per_page=5`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96 bg-gray-900 text-white">
      {images.length > 0 && (
        <>
          <img
            src={images[currentIndex].urls.regular}
            alt={images[currentIndex].alt_description}
            className="w-full h-full object-cover"
          />
          
          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-2xl focus:outline-none transition-all"
            onClick={prevSlide}
          >
            &#10094; {/* Left arrow icon */}
          </button>
          
          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-2xl focus:outline-none transition-all"
            onClick={nextSlide}
          >
            &#10095; {/* Right arrow icon */}
          </button>
        </>
      )}
    </div>
  );
};

export default HeroSlider;
