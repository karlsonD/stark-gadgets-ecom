export class CartItem {
  #product;
  #quantity;

  constructor(product, quantity = 1) {
    this.#product = product;
    this.#quantity = quantity;
  }

  get product() {
    return this.#product;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(value) {
    if (value < 1) return;
    this.#quantity = Math.min(value, this.#product.stock);
  }

  get subtotal() {
    return this.#product.price * this.#quantity;
  }
}
