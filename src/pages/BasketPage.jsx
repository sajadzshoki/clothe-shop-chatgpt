// src/pages/BasketPage.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BasketPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your basket is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-800 font-bold">{item.price}</p>

                  {/* Styled quantity display */}
                  <div className="flex items-center  space-x-2">
                    <span className="text-gray-700">Quantity:</span>
                    <div className="bg-gray-200 text-gray-900 font-semibold px-3 rounded-lg text-lg">
                      {item.quantity}
                    </div>
                  </div>

                  {/* Subtotal */}
                  <p className="mt-2 text-gray-900 font-bold">
                    Subtotal: $
                    {(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="text-red-500 font-bold hover:underline"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-2xl font-semibold">
              Total: <span className="font-bold text-black">${totalPrice.toFixed(2)}</span>
            </h2>
            <button className="mt-4 w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
