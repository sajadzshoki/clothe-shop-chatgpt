import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { fetchUnsplashImages } from '../services/unsplashService'; // Importing the utility

const featuredProducts = [
  { name: 'Casual Sneakers', query: 'casual sneakers', price: '$49.99' },
  { name: 'Summer Dress', query: 'summer dress', price: '$39.99' },
  { name: 'Stylish Backpack', query: 'stylish backpack', price: '$59.99' },
  { name: 'Formal Shirt', query: 'formal shirt', price: '$29.99' },
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Get addToCart function

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const fetchedProducts = await Promise.all(
        featuredProducts.map(async (item) => {
          const images = await fetchUnsplashImages(item.query, 1); // Fetching 1 image for each product
          return {
            name: item.name,
            price: item.price,
            imageUrl: images[0]?.urls?.regular || '', // Fallback if no image is found
            description: `Discover the perfect ${item.name} for your collection.`,
          };
        })
      );
      setProducts(fetchedProducts);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-100"data-aos="fade-left">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-10">
        {products.map((product) => (
          <div key={product.name} className="bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1 text-gray-900">{product.name}</h3>
              <p className="text-md text-gray-600 mb-3">{product.description}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
              <button
                className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
