// Lightbox gallery
lightGallery(document.querySelector('.lightbox-gallery'));

const cart = document.getElementById('cart');
const dropdown = document.getElementById('dropdown-nav');
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeHamburgerMenu = document.getElementById('close-hamburger-menu');
const navItems = document.querySelector('.nav-items');
const productImage = document.getElementById('product-image');

const addQuantity = document.getElementById('increase-quantity');
const removeQuantity = document.getElementById('decrease-quantity');
const quantity = document.getElementById('quantity');
const quantityCart = document.getElementById('quantity-cart');
const fullPrice = document.getElementById('full-price');

const addToCartButton = document.querySelector('.add-to-cart-btn');
const cartItems = document.querySelector('.cart-items');

const emptyMessage = document.getElementById('empty-cart-message');
const hiddenProduct = document.getElementById('hidden-product');

// Get all thumbnails
const thumbnails = document.querySelectorAll('.product-thumbnail');
for (let thumbnail of thumbnails) {
  // Add event listener to every thumbnail
  thumbnail.addEventListener('click', (e) => {
    // Remove active class from every thumbnail on click
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active-thumbnail');
    });
    // Add active class to the clicked thumbnail
    e.target.classList.add('active-thumbnail');

    const imageSrc = e.target.alt;
    productImage.src = './images/' + imageSrc + '.jpg';
  });
}

cart.addEventListener('click', () => {
  dropdown.style.visibility =
    dropdown.style.visibility != 'visible' ? 'visible' : 'hidden';
});

hamburgerMenu.addEventListener('click', () => {
  navItems.style.visibility = 'visible';
});

closeHamburgerMenu.addEventListener('click', () => {
  navItems.style.visibility = 'hidden';
});

// Quantity
let initialQuantity = 0;
addQuantity.addEventListener('click', () => {
  initialQuantity += 1;
  quantity.innerText = initialQuantity;
  quantityCart.innerText = initialQuantity;
  fullPriceText = 125.0 * initialQuantity;
  fullPrice.innerText = fullPriceText;
});
removeQuantity.addEventListener('click', () => {
  if (initialQuantity === 0) {
    initialQuantity = 0;
  } else {
    initialQuantity -= 1;
  }
  quantity.innerText = initialQuantity;
  quantityCart.innerText = initialQuantity;
  fullPriceText = 125.0 * initialQuantity;
  fullPrice.innerText = fullPriceText;
});

addToCartButton.addEventListener('click', () => {
  if (initialQuantity === 0) {
    alert('Please enter quantity');
  } else {
    emptyMessage.style.display = 'none';
    hiddenProduct.style.display = 'block';
  }
});

// Mobile
const nextImage = document.getElementById('next-image');
const previousImage = document.getElementById('previous-image');

let countImage = 1;
nextImage.addEventListener('click', () => {
  if (countImage === 4) {
    countImage = 1;
  } else {
    countImage += 1;
  }
  productImage.src = './images/' + 'image-product-' + countImage + '.jpg';
});
previousImage.addEventListener('click', () => {
  if (countImage === 1) {
    countImage = 4;
  } else {
    countImage -= 1;
  }
  productImage.src = './images/' + 'image-product-' + countImage + '.jpg';
});
