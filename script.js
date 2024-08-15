const verificarButton = document.getElementById("verificar-button");
const loginButton = document.getElementById("login-button");
const cartModal = document.getElementById("cart-modal");
const closerModalBtn = document.getElementById("closer-modal-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const email = document.getElementById("email");

// abrir modal
loginButton.addEventListener("click", function () {
  cartModal.style.display = "flex";
});

// fechar modal apertando voltar
closerModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

// verificar email
verificarButton.addEventListener("click", function () {
  if (email.value === " ") {
    alert("Por favor, coloque seu email para verificação");
  } else {
  }
});
