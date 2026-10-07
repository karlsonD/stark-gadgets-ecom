import { saveCart } from "../services/cartStorage.js";
import { updateCartCount } from "./updateCartCount.js";

export function setupCart(products, cart) {
  
  const productList = document.querySelector("#product-list");

  updateCartCount(cart);

  productList.addEventListener("click", (event) => {
    const button = event.target.closest(".add-to-cart");
    if (!button) return;

    const card = button.closest(".product-card");
    const productId = Number(card.dataset.id);
    const product = products.find((item) => item.id === productId);

    cart.addProduct(product);
    saveCart(cart);
    updateCartCount(cart);
  });
  
}
