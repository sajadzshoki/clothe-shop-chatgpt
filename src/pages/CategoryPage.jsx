import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnsplashImages } from '../services/unsplashService'; // Using the API fetcher

const CategoryPage = () => {
  const { categoryName } = useParams(); // Getting category name from URL
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const products = await fetchUnsplashImages(categoryName, 10); // Fetch 10 images for the category
      setCategoryProducts(products);
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="category-page p-10">
      <h2 className="text-4xl font-bold mb-6">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <img
              src={product.urls.regular}
              alt={categoryName}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-2">{categoryName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
