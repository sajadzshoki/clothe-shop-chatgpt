import React, { useState, useEffect } from 'react';
import { fetchUnsplashImages } from '../services/unsplashService'; // Importing the utility

const sliderItems = [
  { name: 'Featured Suit', query: 'featured suit' },
  { name: 'Winter Jacket', query: 'winter jacket' },
  { name: 'Luxury Shoes', query: 'luxury shoes' },
  { name: 'Jeans', query: 'Jeans' },
];

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSliderImages = async () => {
      const fetchedSlides = await Promise.all(
        sliderItems.map(async (item) => {
          const images = await fetchUnsplashImages(item.query, 1); // Fetch 1 image per slide
          return {
            name: item.name,
            imageUrl: images[0]?.urls?.regular || '', // Fallback if no image is found
          };
        })
      );
      setSlides(fetchedSlides);
    };

    fetchSliderImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-96 overflow-hidden">
      {slides.length > 0 && (
        <div className="w-full h-full" style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{slides[currentSlide].name}</h1>
          </div>
        </div>
      )}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </section>
  );
};

export default HeroSlider;
