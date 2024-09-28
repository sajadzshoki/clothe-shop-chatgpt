import React, { useState, useEffect, useContext } from "react";
import { fetchUnsplashImages } from "../../services/unsplashService"; // Importing the utility
import { CartContext } from "../../context/CartContext"; // Import CartContext
import { useWishlist } from "../../context/WishlistContext"; // Import useWishlist
import { getRandomPrice } from '../../utils'; // Adjust the path as needed
const bestSellingItems = [
  { name: "Premium Suit", query: "premium suit" },
  { name: "Leather Jacket", query: "leather jacket" },
  { name: "Designer Shoes", query: "designer shoes" },
  { name: "Classic T-Shirt", query: "classic t-shirt" },
];

const BestSellingProducts = () => {
 
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Get addToCart function
  const { addToWishlist } = useWishlist();
  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      const fetchedProducts = await Promise.all(
        bestSellingItems.map(async (item) => {
          const images = await fetchUnsplashImages(item.query, 1); // Fetching 1 image for each product
          return {
            name: item.name,
            price: `$${getRandomPrice()}.00`, // Static price for now; this can be dynamic later
            imageUrl: images[0]?.urls?.regular || "", // Fallback if no image is found
            description: `High-quality ${item.name} for your wardrobe.`,
          };
        })
      );
      setProducts(fetchedProducts);
    };

    fetchBestSellingProducts();
  }, []);

  return (
    <section className="p-10 bg-white"data-aos="fade-left">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Best Selling Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-gray-100 p-4 rounded-lg shadow-lg"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-700">{product.description}</p>
              <p className="text-lg font-bold text-gray-900 mt-2">
                {product.price}
              </p>
              <button
                onClick={() => addToWishlist(product)}
                className="mt-2 w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Add to Wishlist
              </button>
              <button
                className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Basket
              </button>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
