let cartCount = 0;
let isWishlisted = false;

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-message').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function addToCart(item, price) {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  showToast(`Added ${item} to cart!`);
}

function toggleWishlist() {
  isWishlisted = !isWishlisted;
  const icon = document.getElementById('wishlist-icon');
  const text = document.getElementById('wishlist-text');
  if (isWishlisted) {
    icon.className = 'fa-solid fa-heart';
    icon.style.color = '#EF4444';
    text.textContent = 'Saved to Wishlist';
    showToast('Saved to Wishlist!');
  } else {
    icon.className = 'fa-regular fa-heart';
    icon.style.color = '';
    text.textContent = 'Add to Wishlist';
    showToast('Removed from Wishlist');
  }
}