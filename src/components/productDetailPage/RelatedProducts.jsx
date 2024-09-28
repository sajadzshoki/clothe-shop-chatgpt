// RelatedProducts.js
import React from 'react';

const RelatedProducts = ({ relatedProducts, addToCart, addToWishlist }) => (
  <>
    <h2 className="text-2xl font-semibold mt-10 mb-4">Related Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedProducts.map((related) => (
        <div key={related.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <img
            src={related.imageUrl}
            alt={related.name}
            className="h-40 w-full object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold mt-2">{related.name}</h3>
          <p className="text-lg font-bold mt-1">{related.price}</p>
          <button
            onClick={() => addToCart(related)}
            className="mt-2 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Add to Basket
          </button>
          <button
            onClick={() => addToWishlist(related)}
            className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Wishlist
          </button>
        </div>
      ))}
    </div>
  </>
);

export default RelatedProducts;
