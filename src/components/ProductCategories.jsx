import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUnsplashImages } from '../services/unsplashService';
import LoadingSpinner from '../components/LoadingSpinner'; // Import the LoadingSpinner

const categories = [
  { name: 'Suit', query: 'suit' },
  { name: 'Jacket', query: 'jacket' },
  { name: 'Shoes', query: 'shoes' },
  { name: 'T-Shirts', query: 't-shirt' },
  { name: 'Pants', query: 'pants' },
  { name: 'Hat', query: 'hat' },
];

const ProductCategories = () => {
  const [categoryImages, setCategoryImages] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImagesForCategories = async () => {
      setLoading(true); // Start loading
      const fetchedImages = await Promise.all(
        categories.map(async (category) => {
          const images = await fetchUnsplashImages(category.query, 1);
          return {
            name: category.name,
            imageUrl: images[0]?.urls?.regular || '',
            description: `${category.name} description`,
          };
        })
      );
      setCategoryImages(fetchedImages);
      setLoading(false); // End loading
    };

    fetchImagesForCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <section id="products" className="p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Products</h2>
      {loading ? (
        <LoadingSpinner /> // Show loading spinner while fetching data
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryImages.map((category) => (
            <div
              key={category.name}
              className="relative group h-80 w-full bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${category.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              onClick={() => handleCategoryClick(category.name)}
            >
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
      )}
    </section>
  );
};

export default ProductCategories;
