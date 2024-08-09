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
  const emailValue = email.value;

  fetch("http://127.0.0.1:5500/verificar-button", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.exists) {
        // Email existe no banco de dados
        console.log("Email existe!");
        // Aqui você pode mostrar a div com a senha
        const senhaDiv = document.querySelector(".mb-4.hidden");
        senhaDiv.classList.remove("hidden");
      } else {
        // Email não existe no banco de dados
        console.log("Email não existe!");
      }
    })
    .catch((error) => console.error(error));
});
