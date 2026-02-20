

const carros =["Gol", "Palio","kwid", "Tempra", "Civic", "tracker"];

let indice = 0;
let ativo = true;

const texto = document.getElementById("carroAtual");
const btnProximo = document.getElementById ("btnProximo");
const btnParar = document.getElementById ("btnParar");

btnProximo.addEventListener("click", () => {
    if (indice< carros.length && ativo){
        texto.textContent = "Carro atual: " + carros[indice];
        indice++;
    } else {
        texto.textContent = "Não a mais carros.";

    }
});


btnParar.addEventListener ("click", () => {
    ativo = false;
    texto.textContent = "loop interrompido pelo usuário.";
});