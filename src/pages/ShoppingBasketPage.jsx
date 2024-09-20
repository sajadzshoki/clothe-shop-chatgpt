import React from 'react';

const ShoppingBasketPage = () => {
  // This can later be connected to a cart management system
  const basketItems = [
    { name: 'Premium Suit', price: '$99.99' },
    { name: 'Leather Jacket', price: '$129.99' },
  ];

  return (
    <div className="shopping-basket-page p-10">
      <h2 className="text-4xl font-bold mb-6">Your Shopping Basket</h2>
      <ul>
        {basketItems.map((item, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg mb-4">
            <h3 className="text-2xl">{item.name}</h3>
            <p className="text-lg font-bold">{item.price}</p>
          </li>
        ))}
      </ul>
      <button className="mt-4 py-2 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ShoppingBasketPage;
