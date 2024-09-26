import React from 'react';

import HeroSlider from '../components/HeroSlider';
import BestSellingProducts from '../components/BestSellingProducts';
import ProductCategories from '../components/ProductCategories';
import ContactUs from '../components/ContactUs';
import FeaturedProducts from '../components/FeaturedProducts';
const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <BestSellingProducts />
      <ProductCategories />
      <FeaturedProducts />
      <ContactUs />
      
    </div>
  );
};

export default HomePage;
