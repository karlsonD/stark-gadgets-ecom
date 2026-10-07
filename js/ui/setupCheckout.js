const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^(09|\+639)\d{9}$/;

import { User } from "../models/User.js";
import { Order } from "../models/Order.js";
import { renderOrderSummary } from "./renderOrderSummary.js";
import { saveCart } from "../services/cartStorage.js";
import { updateCartCount } from "./updateCartCount.js";
import { saveOrder } from "../services/orderStorage.js";

function showError(fieldId, message) {
  document.querySelector(`#${fieldId}-error`).textContent = message;
}

function clearError(fieldId) {
  showError(fieldId, "");
}

function validateFullName(value) {
  const name = value.trim();

  if (name === "") {
    showError("full-name", "Please enter your full name.");
    return false;
  }

  if (name.length < 2) {
    showError("full-name", "Your name must be at least 2 characters.");
    return false;
  }

  clearError("full-name");
  return true;
}

function validateEmail(value) {
  const email = value.trim();

  if (email === "") {
    showError("email", "Please enter your email.");
    return false;
  }

  if (!EMAIL_PATTERN.test(email)) {
    showError(
      "email",
      "Please enter a valid email address (example: name@email.com).",
    );
    return false;
  }

  clearError("email");
  return true;
}

function validatePhone(value) {
  const phone = value.trim().replace(/[\s-]/g, "");

  if (phone === "") {
    showError("phone", "Please enter your phone number.");
    return false;
  }

  if (!PHONE_PATTERN.test(phone)) {
    showError(
      "phone",
      "Please enter a valid mobile number (example: 09171234567).",
    );
    return false;
  }

  clearError("phone");
  return true;
}

function validateAddress(value) {
  const address = value.trim();

  if (address === "") {
    showError("address", "Please enter your delivery address.");
    return false;
  }

  if (address.length < 10) {
    showError(
      "address",
      "Please enter a complete address (at least 10 characters).",
    );
    return false;
  }

  clearError("address");
  return true;
}

function validatePayment(value) {
  if (value === "") {
    showError("payment", "Please select a payment method.");
    return false;
  }

  clearError("payment");
  return true;
}

export function setupCheckout(cart) {
  const form = document.querySelector("#checkout-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const customer = Object.fromEntries(formData);
    const isNameValid = validateFullName(customer.fullName);
    const isEmailValid = validateEmail(customer.email);
    const isPhoneValid = validatePhone(customer.phone);
    const isAddressValid = validateAddress(customer.address);
    const isPaymentValid = validatePayment(customer.payment);
    const isFormValid =
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isAddressValid &&
      isPaymentValid;

    if (!isFormValid) return;

    if (cart.items.length === 0) {
      showError(
        "checkout",
        "Your cart is empty. Add a product before placing an order.",
      );
      return;
    }

    clearError("checkout");

    const user = new User(
      customer.fullName.trim(),
      customer.email.trim(),
      customer.phone.trim(),
      customer.address.trim(),
    );
    const order = new Order(user, cart.items, customer.payment);

    saveOrder(order);
    renderOrderSummary(order);
    cart.clear();
    saveCart(cart);
    updateCartCount(cart);
        document.querySelector("#checkout-summary").hidden = true;
    document.querySelector("#checkout").hidden = true;
    form.reset();
  });
}
