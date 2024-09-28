import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchUnsplashImages } from "../services/unsplashService";
import { useWishlist } from "../context/WishlistContext";
import { getRandomPrice } from '../utils'; 
import ProductDetail from "../components/productDetailPage/ProductDetail";
import RelatedProducts from "../components/productDetailPage/RelatedProducts";
import Specifications from "../components/productDetailPage/Specifications";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);

      // Static product details based on productId
      const productDetails = {
        id: productId,
        name: `Product ${productId}`,
        description: "This is a detailed description of the product. It highlights the main features and benefits.",
        price: `$${getRandomPrice()}.00`,
        mainImageUrl: "",
        additionalImages: [],
      };

      // Fetching images from Unsplash
      const fetchedImages = await fetchUnsplashImages(`product ${productId}`, 3);
      productDetails.mainImageUrl = fetchedImages[0]?.urls?.regular || "";
      productDetails.additionalImages = fetchedImages
        .slice(1)
        .map((image) => image.urls.regular);

      setProduct(productDetails);
      setLoading(false);
    };

    const fetchRelatedProducts = async () => {
      try {
        // Fetching related clothing images from Unsplash
        const fetchedImages = await fetchUnsplashImages("clothing", 3); // Adjust the query as needed
        const fetchedRelatedProducts = fetchedImages.map((image, index) => ({
          id: (index + 1).toString(),
          name: `Related Product ${index + 1}`,
          price: `$${getRandomPrice()}.00`,
          imageUrl: image.urls.regular, // Use the fetched image URL
        }));

        setRelatedProducts(fetchedRelatedProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
        // Optionally set a fallback or handle the error
        setRelatedProducts([]);
      }
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
          <ProductDetail product={product} addToCart={addToCart} addToWishlist={addToWishlist} />
          <Specifications />
          <RelatedProducts relatedProducts={relatedProducts} addToCart={addToCart} addToWishlist={addToWishlist} />
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
