// src/Providers.js
import React from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { UserProvider } from './context/UserContext';

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <WishlistProvider>
        <CartProvider>
        
          {children}
       
        </CartProvider>
      </WishlistProvider>
    </UserProvider>
  );
};

export default Providers;
