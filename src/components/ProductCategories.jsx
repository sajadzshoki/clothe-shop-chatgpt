import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace this with your Unsplash Access Key
const UNSPLASH_ACCESS_KEY = 'MsEJqj7fxtDzBjghuqVTrvL0mSuAljzoZ2lkl9LC7qo';

// List of categories and search terms
const categories = [
  { name: 'Suit', query: 'suit' },
  { name: 'Jacket', query: 'jacket' },
  { name: 'Shoes', query: 'shoes' },
  { name: 'T-Shirts', query: 't-shirt' },
];

const ProductCategories = () => {
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await Promise.all(
        categories.map(async (category) => {
          const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query: category.query, per_page: 1 },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          });
          return {
            name: category.name,
            imageUrl: response.data.results[0]?.urls?.regular,
            description: `${category.name} description`, // You can also fetch real descriptions or use static ones
          };
        })
      );
      setCategoryImages(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <section id="products" className="p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categoryImages.map((category) => (
          <div
            key={category.name}
            className="relative group h-80 w-full bg-gray-900 rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${category.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 group-hover:opacity-75 transition-opacity duration-300">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg mb-4">{category.description}</p>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300"
                >
                  Explore {category.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
