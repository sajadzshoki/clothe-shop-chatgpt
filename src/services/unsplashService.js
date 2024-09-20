import axios from 'axios';

// Unsplash Access Key (you can load it from .env in production)
const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY ||"MsEJqj7fxtDzBjghuqVTrvL0mSuAljzoZ2lkl9LC7qo";

/**
 * Fetch images from Unsplash API based on a search query.
 * @param {string} query - The search term for the images.
 * @param {number} perPage - Number of images to fetch (default 1).
 * @returns {Promise} - A promise that resolves to image data.
 */
export const fetchUnsplashImages = async (query, perPage = 1) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query, per_page: perPage },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data.results; // Returns array of image objects
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return []; // Return an empty array in case of error
  }
};
