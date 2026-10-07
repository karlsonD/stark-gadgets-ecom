export class Product {
  #id;
  #name;
  #brand;
  #price;
  #image;
  #stock;
  #category;

  constructor(id, name, brand, price, image, stock, category) {
    this.#id = id;
    this.#name = name;
    this.#brand = brand;
    this.#price = price;
    this.#image = image;
    this.#stock = stock;
    this.#category = category;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get brand() {
    return this.#brand;
  }
  get price() {
    return this.#price;
  }
  get image() {
    return this.#image;
  }
  get stock() {
    return this.#stock;
  }
  get category() {
    return this.#category;
  }
   getDetails() {
    return `${this.#name} by ${this.#brand}`;
  }
   getSpecs() {
    return "";
  }
}
