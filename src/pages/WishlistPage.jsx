// src/pages/WishlistPage.js
import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <img src={item.imageUrl} alt={item.name} className="h-40 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-lg font-bold text-gray-900 mt-2">{item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
