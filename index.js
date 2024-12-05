// Sample products
// const products = [
//   { id: 1, name: "Running Shoes", price: 50 },
//   { id: 2, name: "Basketball Shoes", price: 70 },
//   { id: 3, name: "Sneakers", price: 60 },
// ];

// // Display products
// function displayProducts() {
//   const productList = document.getElementById('product-list');
//   productList.innerHTML = '';

//   products.forEach(product => {
//       const productCard = document.createElement('div');
//       productCard.className = 'product-card';
//       productCard.innerHTML = `
//           <h3>${product.name}</h3>
//           <p>Price: $${product.price}</p>
//           <button onclick="addToCart(${product.id})">Add to Cart</button>
//       `;
//       productList.appendChild(productCard);
//   });

//   document.getElementById('products').style.display = 'block';
// }

// // Cart management
// let cart = [];

// function addToCart(productId) {
//   const product = products.find(p => p.id === productId);
//   cart.push(product);
//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   const cartItems = document.getElementById('cart-items');
//   cartItems.innerHTML = '';

//   if (cart.length === 0) {
//       cartItems.innerHTML = '<p>Your cart is empty.</p>';
//   } else {
//       cart.forEach((item, index) => {
//           const cartItem = document.createElement('div');
//           cartItem.className = 'cart-item';
//           cartItem.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
//           cartItems.appendChild(cartItem);
//       });
//   }

//   document.getElementById('cart').style.display = 'block';
// }

// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCartDisplay();
// }

// User Registration
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  const user = { name, email, password };

  // Save user to local storage
  localStorage.setItem(email, JSON.stringify(user));
  document.getElementById('message').innerText = 'Registration successful!';
  
  // Clear the form
  this.reset();
});

// User Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve user from local storage
  const user = JSON.parse(localStorage.getItem(email));
  
  if (user && user.password === password) {
      document.getElementById('message').innerText = `Login successful! Welcome, ${user.name}!`;
      document.getElementById('userForms').style.display = 'none';
      // displayProducts();
      window.location.href = 'webpage.html';
  } else {
      document.getElementById('message').innerText = 'Invalid email or password.';
  }

  // Clear the form
  this.reset();
});

// Checkout (placeholder)
document.getElementById('checkoutButton').addEventListener('click', function() {
  alert('Checkout feature is not implemented in this demo.');
});