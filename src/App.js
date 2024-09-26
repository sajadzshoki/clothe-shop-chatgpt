import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BasketPage from "./pages/BasketPage";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import WishlistPage from "./pages/WishlistPage";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <div className="max-w-screen-2xl mx-auto w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route
                path="/product/:productId"
                element={<ProductDetailPage />}
              />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
        
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
