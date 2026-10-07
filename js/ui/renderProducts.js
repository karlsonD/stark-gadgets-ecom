export function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.dataset.id = product.id;

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
        <p class="product-specs">${product.getSpecs()}</p>
        <p>₱${product.price.toLocaleString()}</p>
        <p>${product.stock} in stock</p>
        <button class="add-to-cart">Add to Cart</button>`;

    container.appendChild(card);
  });
}
