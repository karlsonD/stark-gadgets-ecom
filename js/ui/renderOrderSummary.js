const PAYMENT_LABELS = {
  cod: "Cash on Delivery",
  gcash: "GCash",
  card: "Credit/Debit Card",
};

function addLine(container, text) {
  const p = document.createElement("p");
  p.textContent = text;
  container.appendChild(p);
}

export function renderOrderSummary(order) {
  const section = document.querySelector("#order-summary");
  const details = document.querySelector("#order-details");

  details.innerHTML = "";

  addLine(details, `Order number: ${order.id}`);
  addLine(details, `Date: ${order.date.toLocaleString()}`);
  addLine(details, `Name: ${order.user.name}`);
  addLine(details, `Email: ${order.user.email}`);
  addLine(details, `Phone: ${order.user.phone}`);
  addLine(details, `Delivery address: ${order.user.address}`);
  addLine(details, `Payment method: ${PAYMENT_LABELS[order.paymentMethod]}`);

  order.items.forEach((item) => {
    addLine(
      details,
      `${item.product.name} x ${item.quantity} - ₱${item.subtotal.toLocaleString()}`,
    );
  });

  addLine(details, `Total: ₱${order.total.toLocaleString()}`);

  section.hidden = false;
}