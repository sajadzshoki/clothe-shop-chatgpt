import React from "react";

import Hero from "../components/homepage/Hero";
import BestSellingProducts from "../components/homepage/BestSellingProducts";
import ProductCategories from "../components/homepage/ProductCategories";
import ContactUs from "../components/homepage/ContactUs";
import FeaturedProducts from "../components/homepage/FeaturedProducts";
import FAQ from "../components/homepage/FAQ";
import SocialMediaFeed from "../components/homepage/SocialMediaFeed";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <BestSellingProducts />
      <ProductCategories />
      <FeaturedProducts />
      <FAQ />
      <ContactUs />
      <SocialMediaFeed />
    </div>
  );
};

export default HomePage;
