
// Loading product and displaying products
document.addEventListener('DOMContentLoaded', () => {
    // Fetching the product data from 'products.json'
    fetch('products.json')
    .then(response => response.json()) // Parsing the JSON data from the response
    .then(products => {
        // Getting the section in the HTMl where the products will be displayed
        const productSection = document.getElementById('products');

        // Iterating through each product in the products array
        products.forEach(product => {
            // Creating a new div element for each product
            const productCard = document.createElement('div');
            // Setting the class of the div to 'product-card' for styling
            productCard.className = 'product-card';
            // Setting the inner HTML of the div with the product's details
            productCard.innerHTML = `
            <!-- Displaying the product image with the src attribute set to the product's image URL -->
                    <img src="${product.image}" alt="${product.name}">
                    <!-- Displaying the product name in an h2 tag -->
                    <h2>${product.name}</h2>
                    <!-- Displaying the product description in a paragraph tag -->
                    <p>${product.description}</p>
                    <!-- Displaying the product price in a paragraph tag, formatted to two decimal places -->
                    <p>$${product.price.toFixed(2)}</p>
                    <!-- Adding a button that calls the addToCart function with the product's name and price when clicked -->
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                `;

                // Appending the newly created product card to the product section in the HTML
                productSection.appendChild(productCard);
             
        });

    })
})

// Initializing an empty array to store cart items
const cart = [];

// Function to add an item to the cart
function addToCart(name, price){
    // Finding if the item already exists in the cart based on its name
    const item = cart.find(product => product.name === name);

    // Checking if the item was found in the cart
    if(item){
        // If the item exists, increase its quantity by 1
        item.quantity++;
        console.log("Error---->", item);
        
    }else{
        // If the item does not exist, adding a new item to the cart with quantity set to 1
        cart.push({ name, price, quantity: 1 });
    }
    // Calling the function to update the cart display
    updateCart();
}

// Function to update the cart display on the webpage
function updateCart(){
    // Getting the HTML element with the ID 'cart' where the cart items will be displayed
    const cartSection = document.getElementById('cart');

    // Setting the initial content of the cart section to include a heading
    cartSection.innerHTML = '<h2>Your Cart</h2>';

    // Iterating through each item in the cart array
    cart.forEach(item => {
        // Appending the HTML for each item to the cart section
        cartSection.innerHTML += `
        <!-- Container for each cart item -->
        <div class="cart-item">
            <!-- Display the item name, price, and quantity -->
            <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            <!-- Button to increase the quantity of the item by 1 -->
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
                <!-- Button to decrease the quantity of the item by 1 -->
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
                <!-- Button to remove the item from the cart -->
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div> 
            `;
    })
 }

// Function to update the quantity of an item in the cart
function updateQuantity(name, change){
    // Finding the item on the cart array that matches the given name
    const item = cart.find(product => product.name === name);

    // Checking if the item was found in the cart
    if(item){
        // Updating the item's quantity by adding the change value
        item.quantity += change;

        // Checking if the item's quantity is less than or equal to 0
        if(item.quantity <= 0){
        // If quantity is 0 or less, remove the item from the cart
        removeFromCart(name);   
    }else{
        // If quantity is still positive, update the cart display
        updateCart();
    }

    }
}

// Function to remove an item from the cart
function removeFromCart(name){
    // Finding the index of the item in the cart array based on its name
    const index = cart.findIndex(product => product.name === name);

    // Checking if the item was found in the cart (index is not -1)
    if(index !== -1){
        // Removing the item from the cart array using splice
        cart.splice(index, 1);
        // Updating the cart display after removal
        updateCart();
    }
}


// Function to handle the checkout process
function handleCheckout(event){
    // Preventing the default form submission behavior
    event.preventDefault();

    // Getting the value of the input field with the ID 'name'
    const name = document.getElementById('name').value;

    // Getting the value of the input field with the ID 'address'
    const address = document.getElementById('address').value;
    
    // Getting the value of the input field with the ID 'payment'
    const payment = document.getElementById('payment').value;


    // Simulating order submission by displaying an alert with order details
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nPayment: ${payment}\nTotal Items: ${cart.length}`);

    // Clearing the cart by setting its length to 0
    cart.length = 0;

    // Updating the cart display to reflect the cleared cart
    updateCart();
}