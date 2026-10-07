import { loadProducts } from "./services/productService.js";
import { renderProducts } from "./ui/renderProducts.js";
import { setupFilters } from "./ui/setupFilters.js";
import { showStatus, clearStatus } from "./ui/statusMessage.js";
import { Cart } from "./models/Cart.js";
import { setupCart } from "./ui/setupCart.js";
import { loadCart } from "./services/cartStorage.js";


async function init() {
  showStatus("Loading products...", "loading");

  try {
    const products = await loadProducts();
    clearStatus();
    renderProducts(products);
    setupFilters(products);

    const cart = new Cart();
    loadCart(cart, products);
    setupCart(products, cart);
  } catch (error) {
    console.error("Failed to load products:", error);
    showStatus(
      "Sorry, we couldn't load the products. Please try again later.",
      "error",
    );
  }
}

init();
