const loginButton = document.getElementById("login-button");
const cartModal = document.getElementById("cart-modal");
const closerModalBtn = document.getElementById("closer-modal-btn");
const checkoutBtn = document.getElementById("checkout-btn");

// abrir modal
loginButton.addEventListener("click", function () {
  cartModal.style.display = "flex";
});

// fechar modal apertando voltar
closerModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});
