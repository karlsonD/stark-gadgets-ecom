export function renderCart(cart) {
  const container = document.querySelector("#cart-items");
  const totalElement = document.querySelector("#cart-total");
  const countElement = document.querySelector("#cart-count");

  container.innerHTML = "";

  if (cart.items.length === 0) {
    container.innerHTML = "<p> Your cart is empty.</p>";
  }

  cart.items.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("cart-item");
    row.dataset.id = item.product.id;

    row.innerHTML = `
        <span>${item.product.name}</span>
        <span> <button class="decrease-qty">-</button>
    Qty: ${item.quantity}
    <button class="increase-qty">+</button></span>
        <span>₱${item.subtotal.toLocaleString()}</span>
        <button class="remove-from-cart">Remove</button>
        `;

    container.appendChild(row);
  });

  totalElement.textContent = cart.total.toLocaleString();
  countElement.textContent = cart.totalItems;
}
