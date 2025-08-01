let cart = [];
const cartCount = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-container');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        
        // Add product to cart
        cart.push({ name, price });
        updateCart();
    });
});

// Update cart UI
function updateCart() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemCount = cart.length;

    // Update cart count display
    cartCount.textContent = itemCount;

    // Update cart total price
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Display cart items
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    // Show the cart container
    cartContainer.style.display = itemCount > 0 ? 'block' : 'none';
}
