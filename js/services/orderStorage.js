const ORDERS_KEY = "starkGadgetsOrders";

export function loadOrders() {
  const saved = localStorage.getItem(ORDERS_KEY);
  if (!saved) return [];

  try {
    const orders = JSON.parse(saved);
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    console.error("Saved orders could not be read:", error);
    return [];
  }
}

export function saveOrder(order) {
  const orders = loadOrders();
  orders.push(order.toData());
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}