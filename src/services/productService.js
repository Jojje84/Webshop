/*
 * Webshop - Advanced React E-commerce Application
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Webshop
 * License: MIT License - see LICENSE file for details
 * 
 * React-based e-commerce platform with shopping cart and product management.
 * Original code by Jorge Avila - please maintain attribution.
 */

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`/api/products?category=${category}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
