export class Order {
  #id;
  #user;
  #items;
  #paymentMethod;
  #date;

  constructor(user, items, paymentMethod) {
    this.#id = `ORD-${Date.now()}`;
    this.#user = user;
    this.#items = [...items];
    this.#paymentMethod = paymentMethod;
    this.#date = new Date();
  }

  get id() {
    return this.#id;
  }

  get user() {
    return this.#user;
  }

  get items() {
    return [...this.#items];
  }

  get paymentMethod() {
    return this.#paymentMethod;
  }

  get date() {
    return this.#date;
  }

  get total() {
    return this.#items.reduce((sum, item) => sum + item.subtotal, 0);
  }

  toData() {
    return {
      id: this.#id,
      date: this.#date.toISOString(),
      customer: {
        name: this.#user.name,
        email: this.#user.email,
        phone: this.#user.phone,
        address: this.#user.address,
      },
      paymentMethod: this.#paymentMethod,
      items: this.#items.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      total: this.total,
    };
  }
}
