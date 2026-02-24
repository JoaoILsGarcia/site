const btn = document.getElementById("toggle-theme");
const body = document.body;

// Carregar tema salvo
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  body.classList.add("dark");
  btn.textContent = "☀️ Tema claro";
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "☀️ Tema claro";
    localStorage.setItem("tema", "dark");
  } else {
    btn.textContent = "🌙 Tema escuro";
    localStorage.setItem("tema", "light");
  }
});