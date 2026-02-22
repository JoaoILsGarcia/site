const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function criarMensagem(campo) {
  let msg = campo.nextElementSibling;
  if (!msg || msg.tagName !== "SMALL") {
    msg = document.createElement("small");
    campo.after(msg);
  }
  return msg;
}

function validarNome() {
  const msg = criarMensagem(nameInput);

  if (nameInput.value.length >= 3) {
    nameInput.className = "valido";
    msg.textContent = "Nome válido";
    msg.className = "ok";
    return true;
  } else {
    nameInput.className = "invalido";
    msg.textContent = "Digite pelo menos 3 caracteres";
    msg.className = "erro";
    return false;
  }
}

function validarEmail() {
  const msg = criarMensagem(emailInput);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(emailInput.value)) {
    emailInput.className = "valido";
    msg.textContent = "E-mail válido";
    msg.className = "ok";
    return true;
  } else {
    emailInput.className = "invalido";
    msg.textContent = "E-mail inválido";
    msg.className = "erro";
    return false;
  }
}

function validarMensagem() {
  const msg = criarMensagem(messageInput);

  if (messageInput.value.length >= 10) {
    messageInput.className = "valido";
    msg.textContent = "Mensagem válida";
    msg.className = "ok";
    return true;
  } else {
    messageInput.className = "invalido";
    msg.textContent = "Mensagem deve ter pelo menos 10 caracteres";
    msg.className = "erro";
    return false;
  }
}

nameInput.addEventListener("input", validarNome);
emailInput.addEventListener("input", validarEmail);
messageInput.addEventListener("input", validarMensagem);

document.getElementById("contactForm").addEventListener("submit", (e) => {
  if (!validarNome() || !validarEmail() || !validarMensagem()) {
    e.preventDefault();
  }
});