const CART_KEY = "starkGadgetsCart";

export function saveCart(cart) {
  const savedItems = cart.items.map((item) => ({
    id: item.product.id,
    quantity: item.quantity,
  }));

  localStorage.setItem(CART_KEY, JSON.stringify(savedItems));
}

export function loadCart(cart, products) {
  const saved = localStorage.getItem(CART_KEY);
  if (!saved) return;

  let savedItems;
  try {
    savedItems = JSON.parse(saved);
  } catch (error) {
    console.error("Saved cart could not be read:", error);
    return;
  }

  savedItems.forEach((savedItem) => {
    const product = products.find((item) => item.id === savedItem.id);
    if (!product) return;

    cart.addProduct(product);
    cart.updateQuantity(product.id, savedItem.quantity);
  });
}