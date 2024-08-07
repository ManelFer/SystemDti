// Seleciona os elementos do formulário
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Função para validar o formulário
function validateForm() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
    return false;
  }

  // Aqui você pode adicionar mais validações, como verificar se o e-mail é válido, etc.
  if (email === "manoelferreiramatos.ti@gmail.com" || password === "1234") {
    alert("Bem vindo" + email);
  }else if(email != "manoelferreiramatos.ti@gmail.com" || password != "1234" ){
    alert("Senha ou e-mail não cadastrado!");
    return false
  }

  return true;
}

// Função para realizar o login
function login() {
  if (validateForm()) {
    // Aqui você pode adicionar a lógica para realizar o login, como enviar uma requisição para um servidor, etc.
    window.location.href = "./frontend/dash.html";
  }
}

// Adiciona o evento de click ao botão de login
loginButton.addEventListener("click", login);
