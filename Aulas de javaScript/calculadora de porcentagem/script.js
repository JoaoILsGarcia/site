//função de realiza o calculo
function calcularDesconto() {
    //lê os valores digitados pelo usuario
    const precoOriginal = parseFloat(document.getElementById("precoOriginal").value);
    const porcentagemDesconto = parseFloat(document.getElementById("porcentagemDesconto").value);

    //verifica de algum valor é negtivo ou não é numero válido
    if (isNaN(precoOriginal) || isNaN(porcentagemDesconto) || precoOriginal < 0 || porcentagemDesconto < 0) 
    {
        alert("Por favor, insira valores numéricos não-negativos para preço e desconto.");
        console.log ("Entrada inválida: valores negativos ou vazio.");

    } 
    else {
        
        //calcula o valor de desconto e o preço final 
        const desconto = precoOriginal * (porcentagemDesconto / 100);
        const precoFinal = precoOriginal - desconto;
       

        // exibe o resultado no console
        console.log("Preço original: R$" + precoOriginal.toFixed(2));
        console.log("Valor do desconto: R$" + desconto.toFixed(2));
        console.log("Preço final: R$" + precoFinal.toFixed(2));

         document.getElementById("desconto").innerHTML= "Aplicado o desconto de :" + desconto;
        //mostra o resultado em um alerta
        alert(
            "Resultado:\n" + 
            "Preço Original: R$" + precoOriginal.toFixed(2) + "\n" +
            "valor do desconto: R$" + desconto.toFixed(2) + "\n" +
            "Preço final: R$" + precoFinal.toFixed(2)
      );

      
    }
}

//document.getElementById("calcular").addEventListener("click", calcularDesconto);