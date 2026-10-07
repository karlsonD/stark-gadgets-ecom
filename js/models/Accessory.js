import { Product } from "./Product.js";

export class Accessory extends Product {
  #accessoryType;

  constructor(id, name, brand, price, image, stock, category, accessoryType) {
    super(id, name, brand, price, image, stock, category);
    this.#accessoryType = accessoryType;
  }

  get accessoryType() {
    return this.#accessoryType;
  }
    getDetails() {
    return `${super.getDetails()} - ${this.#accessoryType}`;
  }
    getSpecs() {
    return this.#accessoryType;
  }
}
