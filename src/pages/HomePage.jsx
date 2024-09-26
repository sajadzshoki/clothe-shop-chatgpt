import React from "react";

import HeroSlider from "../components/HeroSlider";
import BestSellingProducts from "../components/BestSellingProducts";
import ProductCategories from "../components/ProductCategories";
import ContactUs from "../components/ContactUs";
import FeaturedProducts from "../components/FeaturedProducts";
import FAQ from "../components/FAQ";
import SocialMediaFeed from "../components/SocialMediaFeed";
const HomePage = () => {
  return (
    <div>
      <HeroSlider />
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
