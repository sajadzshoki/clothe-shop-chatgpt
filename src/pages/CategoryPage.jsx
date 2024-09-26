import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchUnsplashImages } from '../services/unsplashService';
import LoadingSpinner from '../components/LoadingSpinner'; // Import the LoadingSpinner component

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true); // Start loading
      const images = await fetchUnsplashImages(categoryName, 10);
      setProducts(images);
      setLoading(false); // End loading
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">{categoryName} Products</h1>
      {loading ? (
        <LoadingSpinner /> // Show loading spinner while fetching data
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link key={index} to={`/product/${index + 1}`}>
              <div
                className="relative group h-80 w-full bg-gray-900 rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${product.urls?.regular})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-100 group-hover:opacity-75 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Product {index + 1}</h3>
                    <a
                      href="#"
                      className="inline-block px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
