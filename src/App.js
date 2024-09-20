
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingBasketPage from './pages/ShoppingBasketPage';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
function App() {
  return (
    <Router>
      <div className="max-w-screen-2xl mx-auto w-full">
          <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/basket" element={<ShoppingBasketPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
