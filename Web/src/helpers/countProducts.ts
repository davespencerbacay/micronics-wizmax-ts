import products from "data/products";

const countProducts = (id?: string) => {
  if (id === undefined) {
    return products.length;
  }

  const filteredProducts = products.filter(
    (product) => product.categoryId === id
  );
  return filteredProducts.length;
};

export default countProducts;
