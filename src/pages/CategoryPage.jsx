


 import React, { useEffect, useState, useContext } from 'react';
 import { useParams } from 'react-router-dom';
 import { fetchUnsplashImages } from '../services/unsplashService';
 import FiltersSidebar from '../components/FiltersSidebar'; // Import FiltersSidebar component
 import ProductList from '../components/ProductList'; // Import ProductList component
 import { useWishlist } from '../context/WishlistContext'; // Assuming you have a Wishlist context
 import { CartContext } from '../context/CartContext'; // Assuming you have a Cart context
 
 const CategoryPage = () => {
   const { categoryName } = useParams();
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const { addToWishlist } = useWishlist(); // Use Wishlist context
   const { addToCart } = useContext(CartContext); // Use Cart context
 
   const [filters, setFilters] = useState({
     brand: [],
     color: [],
     priceRange: [0, 100],
     size: [],
   });
 
   const productNames = [
    "Nike", "Adidas", "Puma", "Reebok", "Under Armour", "Gucci", "Louis Vuitton", "Prada",
   "Versace", "Zara", "H&M", "Levi's", "Calvin Klein", "Tommy Hilfiger", "Ralph Lauren",
   "Chanel", "Burberry", "Dolce & Gabbana", "Armani", "Balenciaga", "Supreme", "Lacoste",
   "Fendi", "Valentino", "Bottega Veneta", "Mango", "ASOS", "Gap", "American Eagle", 
   "Uniqlo", "J.Crew", "Everlane", "North Face", "Columbia", "Patagonia", "Carhartt", 
   "Wrangler", "Lee", "Dockers", "Diesel", "Hugo Boss", "Mizuno", "Skechers", "New Balance",
   "Converse", "Vans", "Timberland", "Dr. Martens", "Ugg", "Crocs", "Kappa", "Champion", 
   "Billionaire Boys Club", "A Bathing Ape", "Fear of God", "A.P.C.", "Isabel Marant", 
   "Off-White", "Palm Angels", "Stussy", "Acne Studios", "Ganni", "Maison Margiela", 
   "Rick Owens", "Yeezy", "Alo Yoga", "Lululemon", "Gymshark", "Fabletics", "Athleta"
   ];
  
   const productDescriptions = [
     "The ultimate comfort and style with responsive cushioning for everyday wear.",
     "High-performance running shoes designed for superior comfort and support.",
     "Classic suede sneakers perfect for casual wear with timeless style.",
     "A retro-inspired sneaker that never goes out of fashion, blending style with comfort.",
     "Innovative footwear with zero-gravity feel, perfect for runners and fitness enthusiasts.",
     "Luxury leather sneakers with a contemporary design for a premium look.",
     "Iconic and stylish, these designer sneakers make a bold statement.",
     "Futuristic design meets functionality with these fashion-forward kicks.",
     "A chunky silhouette paired with bold colors, ideal for streetwear fashion.",
     "Elegant leather boots perfect for a refined and polished appearance."
   ];
 
   useEffect(() => {
     const fetchCategoryProducts = async () => {
       setLoading(true);
       const randomProductCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
       const images = await fetchUnsplashImages(categoryName, randomProductCount);
 
       const productDetails = images.map((image, index) => ({
         id: index + 1,
         name: productNames[index % productNames.length],
         price: `$${(Math.random() * 100).toFixed(2)}`,
         description: productDescriptions[index % productDescriptions.length],
         imageUrl: image.urls?.regular || '',
         rating: (Math.random() * 5).toFixed(1),
       }));
       setProducts(productDetails);
       setLoading(false);
     };
 
     fetchCategoryProducts();
   }, [categoryName]);
 
   const handleFilterChange = (filterType, value) => {
     setFilters((prev) => ({
       ...prev,
       [filterType]: value,
     }));
   };
 
   const resetFilters = () => {
     setFilters({
       brand: [],
       color: [],
       priceRange: [0, 100],
       size: [],
     });
   };
 
   const filteredProducts = products.filter((product) => {
     const withinPriceRange =
       parseFloat(product.price.slice(1)) >= filters.priceRange[0] &&
       parseFloat(product.price.slice(1)) <= filters.priceRange[1];
 
     return (
       withinPriceRange &&
       (filters.brand.length === 0 || filters.brand.includes(product.name))
     );
   });
 
   return (
     <div className="flex">
       <FiltersSidebar
         filters={filters}
         handleFilterChange={handleFilterChange}
         resetFilters={resetFilters}
         productNames={productNames}
       />
       <ProductList
         loading={loading}
         products={products}
         filteredProducts={filteredProducts}
         addToCart={addToCart}
         addToWishlist={addToWishlist}
       />
     </div>
   );
 };
 
 export default CategoryPage;
 