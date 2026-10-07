import { loadProducts } from "../services/productService.js";
import { loadCart, saveCart } from "../services/cartStorage.js";
import { Cart } from "../models/Cart.js";
import { renderCart } from "../ui/renderCart.js";
import { showStatus, clearStatus } from "../ui/statusMessage.js";

function refresh(cart) {
  renderCart(cart);
  document.querySelector("#checkout-link").hidden = cart.items.length === 0;
}

async function init() {
  showStatus("Loading your cart...", "loading");

  try {
    const products = await loadProducts();
    clearStatus();

    const cart = new Cart();
    loadCart(cart, products);
    refresh(cart);

    const cartItems = document.querySelector("#cart-items");

    cartItems.addEventListener("click", (event) => {
      const row = event.target.closest(".cart-item");
      if (!row) return;

      const productId = Number(row.dataset.id);
      const item = cart.items.find((cartItem) => cartItem.product.id === productId);

      if (event.target.closest(".remove-from-cart")) {
        cart.removeProduct(productId);
      } else if (event.target.closest(".increase-qty")) {
        cart.updateQuantity(productId, item.quantity + 1);
      } else if (event.target.closest(".decrease-qty")) {
        cart.updateQuantity(productId, item.quantity - 1);
      } else {
        return;
      }

      saveCart(cart);
      refresh(cart);
    });
  } catch (error) {
    console.error("Failed to load cart:", error);
    showStatus("Sorry, we couldn't load your cart. Please try again later.", "error");
  }
}

init();