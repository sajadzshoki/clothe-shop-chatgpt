// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';

const ProductList = ({ loading, products, filteredProducts, addToCart, addToWishlist }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Products</h1>
      {loading ? (
        <LoadingSpinner /> // Show loading spinner while fetching data
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block group"
            >
              <div className="flex flex-col sm:flex-row items-start border border-gray-300 rounded-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg">
                {/* Image Section */}
                <div className="w-full sm:w-40 h-40 flex-shrink-0">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>

                {/* Product Info Section */}
                <div className="flex flex-1 flex-col p-4 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{product.description}</p>

                  {/* Price and Add to Cart Button */}
                  <div className="flex flex-col space-y-1">
                    <p className="text-lg font-semibold">{product.price}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full sm:w-32 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="flex flex-col justify-between p-4 text-right space-y-2">
                  {/* Rating */}
                  <div className="text-yellow-500">
                    {'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))}
                    <span className="text-gray-600 ml-2">{product.rating}/5</span>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToWishlist(product);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
