
function getImageURL(name) {
  return new URL(`../assets/products/abstract/${name}`, import.meta.url).href;
    
}

export { getImageURL };