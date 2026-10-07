export class User {
  #name;
  #email;
  #phone;
  #address;

  constructor(name, email, phone, address) {
    this.#name = name;
    this.#email = email;
    this.#phone = phone;
    this.#address = address;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get phone() {
    return this.#phone;
  }

  get address() {
    return this.#address;
  }
}