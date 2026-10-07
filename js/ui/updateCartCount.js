export function updateCartCount(cart) {
  const countElement = document.querySelector("#cart-count");
  countElement.textContent = cart.totalItems;
}