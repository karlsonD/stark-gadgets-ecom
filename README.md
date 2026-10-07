# Stark Gadgets

Stark Gadgets is an e-commerce website that sells phones, smartwatches, and accessories from real brands such as Apple, Samsung, and Anker. A user can browse products, manage a shopping cart, and complete a checkout. The project is built with HTML, CSS, and JavaScript (ES modules) only, with no backend.

## How to Run

1. Install [Visual Studio Code](https://code.visualstudio.com/) and its **Live Server** extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

> **Note:** Do not open `index.html` by double-clicking it. The site loads its data with `fetch()` and uses JavaScript modules, and browsers block both when a page is opened directly from a file.

## Main Features

### 1. Product Catalog

- Products are loaded from `data/products.json` and drawn on the page by JavaScript.
- Search by product name or brand.
- Filter by category: All, Phones, Smartwatches, Accessories.
- Sort by price, low to high or high to low.

### 2. Shopping Cart

- Add products, remove products, and change the quantity with the `+` and `-` buttons.
- The quantity can never go above the product's stock.
- The cart is saved in `localStorage`, so it survives a page refresh.
- The cart shows each item's subtotal, the total price, and the item count.

### 3. Checkout

- A form collects the full name, email, phone number, delivery address, and payment method.
- Every field is validated, and an error message appears under each invalid field:
  - **Full name:** Required, at least 2 characters.
  - **Email:** Required, must look like an email address.
  - **Phone number:** Required, must be a Philippine mobile number (for example `09171234567` or `+639171234567`).
  - **Delivery address:** Required, at least 10 characters.
  - **Payment method:** One must be selected.
- An empty cart cannot be checked out.
- After a valid checkout, an order summary is shown, the order is saved in `localStorage`, and the cart is cleared.
- Payment is simulated. No real payment is processed.

## Asynchronous JavaScript

Products are loaded with `fetch()` and `async/await` in `js/services/productService.js`. The page shows a "Loading products..." message while it waits, and an error message if the request fails.

## Object-Oriented Design

| Class        | File                      | What it represents                                                                         |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------------ |
| `Product`    | `js/models/Product.js`    | The parent class. Holds id, name, brand, price, image, stock, and category.                |
| `Phone`      | `js/models/Phone.js`      | A child of Product. Adds `storage` (in GB).                                                |
| `Smartwatch` | `js/models/Smartwatch.js` | A child of Product. Adds `batteryLife` (in hours).                                         |
| `Accessory`  | `js/models/Accessory.js`  | A child of Product. Adds `accessoryType` (Earphones or Charger).                           |
| `CartItem`   | `js/models/CartItem.js`   | One product in the cart with its quantity. The quantity is capped at the product's stock.  |
| `Cart`       | `js/models/Cart.js`       | The shopping cart. Adds, removes, and updates items, clears itself, and calculates totals. |
| `User`       | `js/models/User.js`       | The customer: name, email, phone, and address.                                             |
| `Order`      | `js/models/Order.js`      | A placed order: id, user, items, payment method, date, and total.                          |

### OOP Concepts Used

- **Encapsulation:** Every class keeps its data in private fields (`#field`) and exposes it through getters. For example, only the `Cart` class can change its own list of items.
- **Inheritance:** `Phone`, `Smartwatch`, and `Accessory` extend `Product`.
- **Polymorphism:** Every product class has `getDetails()` and `getSpecs()`, and each class returns a different result. The page code calls the same method on every product without checking its type.
- **Composition:** A `CartItem` contains a `Product`, a `Cart` contains `CartItem` objects, and an `Order` contains a `User` and `CartItem` objects.
- **Factory Function:** `createProduct()` in `js/utils/createProduct.js` chooses the right class for each product based on its category.

## Data Source and Storage

- `data/products.json` holds the 6 products and is loaded with `fetch()`.
- `localStorage` key `starkGadgetsCart` holds the cart as a list of product ids and quantities. The full products are rebuilt from `products.json` when the page loads.
- `localStorage` key `starkGadgetsOrders` holds all placed orders, including the prices paid.

## File Structure

```text
stark-gadgets/
├── css/
│   └── styles.css
├── data/
│   └── products.json
├── images/
│   ├── airpodspro.jpg
│   ├── anker.jpg
│   ├── appleseries9.jpg
│   ├── galaxys24.jpg
│   ├── iphone17.jpg
│   └── watch6.jpg
├── js/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Phone.js
│   │   ├── Smartwatch.js
│   │   ├── Accessory.js
│   │   ├── CartItem.js
│   │   ├── Cart.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── pages/
│   │   ├── cartPage.js
│   │   └── checkoutPage.js
│   ├── services/
│   │   ├── cartStorage.js
│   │   ├── orderStorage.js
│   │   └── productService.js
│   ├── ui/
│   │   ├── renderCart.js
│   │   ├── renderCheckoutSummary.js
│   │   ├── renderOrderSummary.js
│   │   ├── renderProducts.js
│   │   ├── setupCart.js
│   │   ├── setupCheckout.js
│   │   ├── setupFilters.js
│   │   ├── statusMessage.js
│   │   └── updateCartCount.js
│   ├── utils/
│   │   └── createProduct.js
│   └── main.js
├── cart.html
├── checkout.html
├── index.html
└── README.md


## Group Members and Contributions

| Member | Role | Contributions |
|---|---|---|
| Arvy Karlson C. Dabasol | Project Manager / Developer | Managed the project structure, coordinated development, and implemented core website functionality. |
| Nezzar Ivan M. Heray | Frontend Developer | Developed the product catalog, product display, search, filtering, and sorting features. |
| Jerico L. Libaton | UI/UX Designer | Designed the website layout, overall user experience, managed the product data, products.json, localStorage, and data-related functionality. |
| Akhemee Yujinn Cain | Testing / Documentation | Tested the website features, checked form validation and cart functionality, and prepared the project documentation. |


## Limitations

- There is no backend or database. All data is stored in the browser's `localStorage`, so the cart and orders exist only in the browser that created them.
- Payment is simulated.
- User accounts and product reviews are not implemented.
```
