import { createProduct } from "../utils/createProduct.js";

export async function loadProducts() {
  const response = await fetch("data/products.json");

  if (!response.ok) {
    throw new Error(`Could not load products (status ${response.status})`);
  }
  const dataList = await response.json();
  return dataList.map((data) => createProduct(data));
}
