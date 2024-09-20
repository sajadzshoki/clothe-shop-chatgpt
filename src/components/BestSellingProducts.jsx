// src/components/BestSellingProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=t-shirt&client_id=MsEJqj7fxtDzBjghuqVTrvL0mSuAljzoZ2lkl9LC7qo&per_page=4`
        );
        setProducts(response.data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="p-10">
    <h2 className="text-3xl font-bold mb-8 text-center">Best Selling Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white flex flex-col">
          <img 
            src={product.urls.regular} 
            alt={product.alt_description} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-grow">
            <h3 className="font-semibold text-lg">{product.alt_description || 'T-Shirt'}</h3>
            <p className="text-gray-600">$29.99</p>
            <p className="text-gray-400 text-sm mt-2">Stylish and comfortable, perfect for everyday wear.</p>
          </div>
          <div className="p-4">
            <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 flex items-center justify-center">
              <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />
              Add to Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default BestSellingProducts;
