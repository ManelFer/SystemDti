// função para sair do sistema
const closeBtn = document.getElementById("close-Btn");

function sair() {
  window.location.href = "../index.html";
}
closeBtn.addEventListener("click", sair);
