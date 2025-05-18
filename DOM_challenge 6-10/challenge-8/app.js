let cart = {};
let total = 0;

function addToCart(productName, price){
    const cartItems = document.getElementById("cart-items");
    const emptyMessage = document.querySelector(".empty-cart");
    if(emptyMessage){
        emptyMessage.remove();
    }
    if(cart[productName]){
        cart[productName].quantity++
    }else{
        cart[productName] = {price : price, quantity : 1}
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";    
        cartItem.id = `item-${productName}`;

        cartItem.innerHTML = `<span>${productName}</span>
      <div class="quantity-controls">
        <button onclick="decreaseQuantity('${productName}')">-</button>
        <span id="qty-${productName}">1</span>
        <button onclick="increaseQuantity('${productName}')">+</button>
      </div>
      <span id="price-${productName}">$${price.toFixed(2)}</span>`;
      cartItems.appendChild(cartItem);

    }
    updateTotal();
}

function updateTotal(){
    total = 0;
    for(const item in cart){
        total += cart[item].price * cart[item].quantity;
    }
    document.querySelector("#cart-total h3").textContent = `Total :${total.toFixed(2)}`;
}

function increaseQuantity(productName) {
    cart[productName].quantity++;
    updateCartItem(productName);
    updateTotal();
  }
  
  function decreaseQuantity(productName) {
    cart[productName].quantity--;
  
    if (cart[productName].quantity === 0) {
      delete cart[productName];
      const itemElement = document.getElementById(`item-${productName}`);
      if (itemElement) {
        itemElement.remove();
        }
  
      if (Object.keys(cart).length === 0) {
        const cartItemsContainer = document.getElementById("cart-items");
        const empty = document.createElement("div");
        empty.className = "empty-cart";
        empty.textContent = "Cart is empty";
        cartItemsContainer.appendChild(empty);
      }
    } else {
      updateCartItem(productName);
    }
  
    updateTotal();
  }
  

function updateCartItem(productName) {
    document.getElementById(`qty-${productName}`).textContent =
      cart[productName].quantity;
  
    const itemTotal = cart[productName].price * cart[productName].quantity;
    document.getElementById(
      `price-${productName}`
    ).textContent = `${itemTotal.toFixed(2)}`;
  }