import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUnsplashImages } from "../services/unsplashService"; // Make sure this path is correct

const blogArticles = [
  {
    id: 1,
    title: "10 Essential Summer Outfits",
    excerpt: "Discover the must-have outfits to stay stylish this summer.",
    content: "Summer is just around the corner! Here are ten essential outfits that will keep you looking fresh and stylish all season long. From beachwear to casual outings, we’ve got you covered.",
  },
  {
    id: 2,
    title: "How to Accessorize Your Outfit",
    excerpt: "Learn the art of accessorizing to elevate your style.",
    content: "Accessories can make or break an outfit. In this article, we’ll guide you through the best accessories to elevate any look, from jewelry to bags.",
  },
  {
    id: 3,
    title: "Color Trends for the Year",
    excerpt: "Stay ahead with the latest color trends in fashion.",
    content: "Every year, certain colors emerge as trends in the fashion world. Learn about the colors that will dominate this year and how to incorporate them into your wardrobe.",
  },
  {
    id: 4,
    title: "Fashion Tips for Every Body Type",
    excerpt: "Find styles that flatter your unique body shape.",
    content: "Understanding your body type is essential for choosing the right outfits. Here are fashion tips that will help you highlight your best features.",
  },
  {
    id: 5,
    title: "Dressing for Different Occasions",
    excerpt: "What to wear for every event on your calendar.",
    content: "From formal gatherings to casual outings, dressing appropriately for each occasion can be tricky. We break down what to wear for different events.",
  },
  {
    id: 6,
    title: "Sustainable Fashion: How to Shop Ethically",
    excerpt: "Make responsible choices with your fashion purchases.",
    content: "Sustainable fashion is on the rise. Discover how to shop ethically and support brands that prioritize the planet while still looking great.",
  },
];

const BlogDetailPage = () => {
  const { postId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleImage = async () => {
      const articleIndex = parseInt(postId) - 1; // Adjust for array index
      if (blogArticles[articleIndex]) {
        const images = await fetchUnsplashImages(blogArticles[articleIndex].title, 1);
        const imageUrl = images[0]?.urls?.regular || ""; // Set the Unsplash image URL
        setArticle({ ...blogArticles[articleIndex], imageUrl });
      }
      setLoading(false);
    };

    fetchArticleImage();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="mb-4 w-full h-[400px] object-cover rounded-lg"
      />
      <p className="text-lg">{article.content}</p>
    </div>
  );
};

export default BlogDetailPage;
