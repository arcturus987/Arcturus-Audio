const shoppingLogo = document.getElementById('shopping-logo');
const userLogo = document.getElementById('user-logo');
const errorContainer = document.querySelector('.error-container');
const closeButton = document.getElementById('error-close');

// function to show error container
function showError() {
  errorContainer.style.display = 'block'; 
}

// function to hide error container
function closeError() {
  errorContainer.style.display = 'none';
}

// event listeners
shoppingLogo.addEventListener('click', showError);
userLogo.addEventListener('click', showError);
closeButton.addEventListener('click', closeError);