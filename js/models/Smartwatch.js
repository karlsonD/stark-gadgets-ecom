import { Product } from "./Product.js";

export class Smartwatch extends Product {
  #batteryLife;

  constructor(id, name, brand, price, image, stock, category, batteryLife) {
    super(id, name, brand, price, image, stock, category);
    this.#batteryLife = batteryLife;
  }

  get batteryLife() {
    return this.#batteryLife;
  }
    getDetails() {
    return `${super.getDetails()} - ${this.#batteryLife} hours battery life`;
  }
    getSpecs() {
    return `${this.#batteryLife} hours battery life`;
  }
}
