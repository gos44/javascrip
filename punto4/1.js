let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cartTotal').innerText = 'Total productos: ' + cart.length;
}
