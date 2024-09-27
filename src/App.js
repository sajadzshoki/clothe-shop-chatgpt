import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BasketPage from "./pages/BasketPage";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import WishlistPage from "./pages/WishlistPage";
import AuthPage from "./pages/AuthPage";
import Providers from "./Providers"; // Import the new Providers component
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration (in milliseconds)
  }, []);
  
  return (
    <Providers>
      <Router>
        <div className="max-w-screen-2xl mx-auto w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Providers>
  );
}

export default App;
