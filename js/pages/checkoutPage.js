import { loadProducts } from "../services/productService.js";
import { loadCart } from "../services/cartStorage.js";
import { Cart } from "../models/Cart.js";
import { renderCheckoutSummary } from "../ui/renderCheckoutSummary.js";
import { updateCartCount } from "../ui/updateCartCount.js";
import { setupCheckout } from "../ui/setupCheckout.js";
import { showStatus, clearStatus } from "../ui/statusMessage.js";

async function init() {
  showStatus("Loading your order...", "loading");

  try {
    const products = await loadProducts();
    clearStatus();

    const cart = new Cart();
    loadCart(cart, products);
    updateCartCount(cart);
    renderCheckoutSummary(cart);

    if (cart.items.length === 0) {
      document.querySelector("#checkout").hidden = true;
    }

    setupCheckout(cart);
  } catch (error) {
    console.error("Failed to load checkout:", error);
    showStatus("Sorry, we couldn't load your order. Please try again later.", "error");
  }
}

init();