import { renderProducts } from "./renderProducts.js";

export function setupFilters(products) {
  const filterBar = document.querySelector("#category-filters");
  const searchInput = document.querySelector("#search-input");
  const sortSelect = document.querySelector("#sort-select");

  let selectedCategory = "All";

  function update() {
    const searchText = searchInput.value.trim().toLowerCase();
    const sortValue = sortSelect.value;

    const result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText);
      return matchesCategory && matchesSearch;
    });

    if (sortValue === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }
    renderProducts(result);
  }

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    filterBar
      .querySelectorAll("button")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    selectedCategory = button.dataset.category;
    update();
  });

  searchInput.addEventListener("input", update);
  sortSelect.addEventListener("change", update);
}
