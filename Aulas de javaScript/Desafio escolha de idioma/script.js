function mostrarSaudacao() {
    let idioma = document.getElementById("idioma").value;
    let saudacao ="";

    switch (idioma) {

        case "portugues":

            saudacao = " Olá!"
            break;
        case "ingles":

            saudacao = " Hello!"
            break;

        case "espanhol":
            saudacao = " Hola!"
            break;

        case "frances":
            saudacao = "Bonjour!"

            break;    
        default : 
        saudacao = "Por favor, selecione um idioma."
    }
    document.getElementById("saudacao").textContent = saudacao;

}