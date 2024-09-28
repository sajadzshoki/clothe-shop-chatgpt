// FiltersSidebar.js
import React from 'react';

const FiltersSidebar = ({ filters, handleFilterChange, resetFilters, productNames,setFilters }) => {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r border-gray-300 sticky top-16 h-screen overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="mb-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
      >
        Reset Filters
      </button>

      {/* Brand Filter */}
      <div className="mb-4 overflow-y-auto max-h-64">
        <h3 className="font-semibold mb-2">Brand</h3>
        {productNames.map((brand, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilterChange('brand', e.target.checked ? [...filters.brand, brand] : filters.brand.filter(b => b !== brand))
              }
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
          <label key={color} className="block">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilterChange('color', e.target.checked ? [...filters.color, color] : filters.color.filter(c => c !== color))
              }
            />
            {color}
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[0]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [Number(e.target.value), prev.priceRange[1]],
              }))
            }
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [prev.priceRange[0], Number(e.target.value)],
              }))
            }
            className="w-full"
          />
        </div>
        <p>
          Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </p>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Size</h3>
        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
          <label key={size} className="block">
            <input
              type="checkbox"
              onChange={(e) =>
                handleFilterChange('size', e.target.checked ? [...filters.size, size] : filters.size.filter(s => s !== size))
              }
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FiltersSidebar;
