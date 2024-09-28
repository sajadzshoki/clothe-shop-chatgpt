// ProductDetail.js
import React from 'react';

const ProductDetail = ({ product, addToCart, addToWishlist }) => (
  <div className="flex flex-col md:flex-row items-start md:space-x-10 mb-10">
    <div className="flex-shrink-0">
      <img
        src={product.mainImageUrl}
        alt={product.name}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="mt-6 md:mt-0">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-black mb-4">{product.price}</p>
      
      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => addToCart(product)}
          className="px-6 py-2 bg-black text-white font-medium rounded-lg shadow hover:bg-gray-800 transition duration-300"
        >
          Add to Basket
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Add to Wishlist
        </button>
      </div>

      {/* Additional Images Gallery */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">More Images</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        {product.additionalImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Additional ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm"
          />
        ))}
      </div>
    </div>
  </div>
);

export default ProductDetail;
