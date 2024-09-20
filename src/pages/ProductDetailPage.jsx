import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the product ID from the route
  // Mock product data; in a real application, you'd fetch this from an API
  const product = {
    id: productId,
    name: `Product ${productId}`, // Replace with real product name
    description: 'This is a detailed description of the product.',
    price: '$29.99', // Replace with real product price
    imageUrl: 'https://via.placeholder.com/300', // Replace with real product image URL
  };

  const handleAddToBasket = () => {
    // Logic for adding the product to the basket
    console.log(`${product.name} added to basket`);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="mb-4" />
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-4">{product.price}</p>
      <button
        onClick={handleAddToBasket}
        className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ProductDetailPage;
