
export const getImageUrl = (category, imageName) => {
  try {
    return import(`../assets/images/products/${category}/${imageName}`).then(module => module.default);
  } catch (error) {
    console.error(`Error loading image for ${imageName}:`, error);
    return '/path/to/fallback-image.png';  
  }
};
