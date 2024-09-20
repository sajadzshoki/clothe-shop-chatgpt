import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnsplashImages } from '../services/unsplashService';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Getting product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchUnsplashImages('product', 1); // Fetch a single product for now
      setProduct(products[0]);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-page p-10">
      <h2 className="text-4xl font-bold mb-6">{product.alt_description}</h2>
      <img
        src={product.urls.regular}
        alt={product.alt_description}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <p className="mt-6 text-lg">{product.description}</p>
      <p className="text-2xl font-bold mt-4">$99.99</p> {/* Static price */}
      <button className="mt-4 py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
        Add to Basket
      </button>
    </div>
  );
};

export default ProductDetailPage;
