import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUnsplashImages } from "../services/unsplashService"; 

const blogPosts = [
  {
    id: 1,
    title: '5 Essential Fashion Tips for Every Wardrobe',
    excerpt: 'Discover the must-have items that can elevate your style.',
  },
  {
    id: 2,
    title: 'How to Style a Basic T-Shirt: 3 Outfit Ideas',
    excerpt: 'Learn how to dress up or down with just a t-shirt.',
  },
  {
    id: 3,
    title: 'Seasonal Fashion Trends You Need to Know',
    excerpt: 'Stay ahead of the curve with the latest trends for this season.',
  },
  {
    id: 4,
    title: 'Mastering the Art of Layering',
    excerpt: 'Tips and tricks for layering your outfits like a pro.',
  },
  {
    id: 5,
    title: 'The Ultimate Guide to Sustainable Fashion',
    excerpt: 'Learn how to shop ethically and sustainably.',
  },
  {
    id: 6,
    title: 'Accessorizing 101: The Perfect Finishing Touch',
    excerpt: 'How to choose the right accessories for any outfit.',
  },
  {
    id: 7,
    title: 'Wardrobe Essentials for Every Season',
    excerpt: 'The key pieces you need for year-round style.',
  },
  {
    id: 8,
    title: 'Navigating Fashion Weeks: What to Expect',
    excerpt: 'A behind-the-scenes look at the world of fashion shows.',
  },
  {
    id: 9,
    title: 'Tips for Dressing Professionally',
    excerpt: 'How to create a polished look for the office.',
  },
  {
    id: 10,
    title: 'Fashion Mistakes to Avoid',
    excerpt: 'Common pitfalls and how to steer clear of them.',
  },
];

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchBlogArticles = async () => {
      const fetchedArticles = await Promise.all(
        blogPosts.map(async (article) => {
          const images = await fetchUnsplashImages(article.title, 1); // Fetching 1 image for each article
          return {
            ...article,
            imageUrl: images[0]?.urls?.regular || "", // Set the Unsplash image URL
          };
        })
      );
      setArticles(fetchedArticles);
    };

    fetchBlogArticles();
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
              <Link to={`/blog/${article.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
