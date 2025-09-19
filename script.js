let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ name: product, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - KSh ${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hello JammyCloset! I'd like to order:\n";
  cart.forEach(item => {
    message += `${item.name} - KSh ${item.price}\n`;
  });
  message += `\nTotal: KSh ${total}`;

  // WhatsApp link (replace with your wife's number in international format)
  window.open(`https://wa.me/254718025485?text=${encodeURIComponent(message)}`, "_blank");
}