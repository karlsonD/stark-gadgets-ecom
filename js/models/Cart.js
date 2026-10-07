import { CartItem } from "./CartItem.js";

export class Cart {
  #items = [];

  get items() {
    return [...this.#items];
  }

  addProduct(product) {
    const existing = this.#items.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity = existing.quantity + 1;
    } else {
      this.#items.push(new CartItem(product));
    }
  }

  removeProduct(productId) {
    this.#items = this.#items.filter((item) => item.product.id !== productId);
  }

  updateQuantity(productId, quantity) {
    const item = this.#items.find((item) => item.product.id === productId);
    if (!item) return;
   
    if (quantity < 1) {
      this.removeProduct(productId);
    } else {
      item.quantity = quantity;
    }
    
  }

  clear() {
    this.#items = [];
  }

  get totalItems() {
    return this.#items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get total() {
    return this.#items.reduce((sum, item) => sum + item.subtotal, 0);
  }
}
