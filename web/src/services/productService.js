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
