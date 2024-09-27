import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // Import CartContext
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchUnsplashImages } from "../services/unsplashService"; // Import the utility to fetch images
import { useWishlist } from "../context/WishlistContext";
import { getRandomPrice } from '../utils'; // Adjust the path as needed

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Get addToCart function
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);

      // Static product details based on productId
      const productDetails = {
        id: productId,
        name: `Product ${productId}`,
        description:
          "This is a detailed description of the product. It highlights the main features and benefits.",
        price: `$${getRandomPrice()}.00`,
        mainImageUrl: "", // Will be fetched from Unsplash
        additionalImages: [], // Will be fetched from Unsplash
      };

      // Fetching main image and additional images from Unsplash
      const fetchedImages = await fetchUnsplashImages(
        `product ${productId}`,
        3
      ); // Fetch 3 images for this product
      productDetails.mainImageUrl = fetchedImages[0]?.urls?.regular || ""; // Set the main image URL
      productDetails.additionalImages = fetchedImages
        .slice(1)
        .map((image) => image.urls.regular); // Set additional images

      setProduct(productDetails);
      setLoading(false);
    };

    const fetchRelatedProducts = async () => {
      // Simulate fetching related products
      const fetchedRelatedProducts = [
        {
          id: "1",
          name: "Related Product 1",
          price: `$${getRandomPrice()}.00`,
          imageUrl: "url_to_image_1.jpg", // Replace with actual image URLs
        },
        {
          id: "2",
          name: "Related Product 2",
          price: `$${getRandomPrice()}.00`,
          imageUrl: "url_to_image_2.jpg", // Replace with actual image URLs
        },
        {
          id: "3",
          name: "Related Product 3",
          price: `$${getRandomPrice()}.00`,
          imageUrl: "url_to_image_3.jpg", // Replace with actual image URLs
        },
      ];
      setRelatedProducts(fetchedRelatedProducts);
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [productId]);

  return (
    <div className="container mx-auto p-10">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <img
            src={product.mainImageUrl}
            alt={product.name}
            className="mb-4 w-[400px] h-[400px] object-cover rounded-lg" // Adjust max width
          />
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">{product.price}</p>

          {/* Additional Images Gallery */}
          <h2 className="text-2xl font-semibold mb-2">More Images</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg max-w-[150px]" // Adjust size for additional images
              />
            ))}
          </div>

          {/* Specifications Section */}
          <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="text-lg">Material: 100% Cotton</li>
            <li className="text-lg">Size: M, L, XL</li>
            <li className="text-lg">Color: Red, Blue, Green</li>
          </ul>

          <button
            onClick={() => addToCart(product)} // Add product to cart
            className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300"
          >
            Add to Basket
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="m-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Wishlist
          </button>

          {/* Related Products Section */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <div key={related.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <img
                  src={related.imageUrl}
                  alt={related.name}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{related.name}</h3>
                <p className="text-lg font-bold mt-1">{related.price}</p>
                <button
                  onClick={() => addToCart(related)}
                  className="mt-2 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Add to Basket
                </button>
                <button
                  onClick={() => addToWishlist(related)}
                  className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Add to Wishlist
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
