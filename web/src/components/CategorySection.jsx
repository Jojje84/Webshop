import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Håller reda på vald kategori
  const categories = [...new Set(products.map(product => product.category))]; // Hämta alla unika kategorier

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Om samma kategori är klickad igen, dölja produkter
    } else {
      setSelectedCategory(category); // Visa produkter för vald kategori
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <div>
        {/* Visa alla kategorier som klickbara */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: '10px',
              margin: '10px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Visa produkter för den valda kategorin */}
      {selectedCategory && (
        <div>
          <h3>{selectedCategory} Products</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products
              .filter(product => product.category === selectedCategory)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
