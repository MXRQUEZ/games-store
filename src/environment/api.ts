const api = {
  products: "/api/products", // params (?filter=TEXT)
  productsRecent: "/api/products/recent", // params (?amount=NUMBER)
  productsByCategoryName: "/api/products/category", // query param (/category-name)
  categories: "/api/categories",
  categoryByName: "/api/category", // query param (/category-name),
};

export default api;
