 const products = [
  {
    id: 1,
    name: "Watches",
    price: 899,
    image: "watch.jpg"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1499,
    image: "headset.jpg"
  },
  {
    id: 3,
    name: "Smartphone",
    price: 39999,
    image: "phones.jpg"
  }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
}

renderProducts();



