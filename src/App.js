// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";
import BestSellingProducts from "./components/BestSellingProducts";
import ProductCategories from "./components/ProductCategories";

function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between">
      {/* Set max-width to 1600px and center content */}
      <div className="max-w-screen-2xl mx-auto w-full">
        <Navbar />
        <HeroSlider />
        <BestSellingProducts />
        <section id="products" className="p-10">
          <ProductCategories />
        </section>
        <section id="about" className="p-10">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-4">
            Welcome to ClotheShop, your destination for minimalist fashion!
          </p>
        </section>
        <section id="contact" className="p-10">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-4">Feel free to reach out for any inquiries.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
