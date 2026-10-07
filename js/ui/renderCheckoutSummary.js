export function renderCheckoutSummary(cart) {
  const container = document.querySelector("#checkout-items");
  const totalElement = document.querySelector("#checkout-total");

  container.innerHTML = "";

  if (cart.items.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.items.forEach((item) => {
    const row = document.createElement("div");
    row.classList.add("summary-row");
    row.innerHTML = `
      <span>${item.product.name}</span>
      <span>Qty: ${item.quantity}</span>
      <span>₱${item.subtotal.toLocaleString()}</span>
    `;
    container.appendChild(row);
  });

  totalElement.textContent = cart.total.toLocaleString();
}