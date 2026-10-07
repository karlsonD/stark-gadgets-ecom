import { Product } from "./Product.js";

export class Phone extends Product {
  #storage;

  constructor(id, name, brand, price, image, stock, category, storage) {
    super(id, name, brand, price, image, stock, category);
    this.#storage = storage;
  }

  get storage() {
    return this.#storage;
  }
    getDetails() {
    return `${super.getDetails()} - ${this.#storage}GB storage`;
  }
    getSpecs() {
    return `${this.#storage}GB storage`;
  }
}
