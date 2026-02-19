const carros = ["uno","fusca","gol","chevete"]
const conteudo = document.getElementById ("conteudo");

var dados;
var i;

function criaSecao (titulo,dadosf)
{
    

let secao= document.createElement ("div");
secao.innerHTML = "<h2>" + titulo + "</h2>"+ dadosf;
conteudo.appendChild(secao);

}


dados= "";
i = 0;

while (i < 4) 
{
     dados += "<p>"+carros[i]+"</p>";
    i++;

}

criaSecao("Loop While",dados);

dados= "";
i = 0;

while (i < carros.length) 
{
     dados += "<p>"+carros[i]+"</p>";
    i++;

}
criaSecao("Loop While melhorado",dados );

dados= "";
i = 0;
do {
    dados += "<p>"+carros[i]+"</p>";
    i++;

} while(i < carros.length);
criaSecao(" While invertido",dados );

dados= "";
for (i = 0; i < carros.length; i++)
{
    dados += "<p>"+carros[i]+"</p>"
}
criaSecao(" loop while",dados );

dados="";
for(let carro of carros)
{

   dados += "<p>"+carro+"</p>"  
}
criaSecao(" loop for of",dados );


let carro1 = {marca : "ford", modelo: "ka", ano:"1989"}
let carro2 = {marca : "renaut", modelo: "kwid", ano:"2024"}

let carros2= [];
carros2.push (carro1);
carros2.push (carro2);

dados = "";
for(let carro of carros2)
{
    let propriedades = "";

    for (let prop in carro)
    {
        propriedades += carro[prop] +" | ";

    }
    
      dados += "<p>"+propriedades+"</p>" 
}

 criaSecao("loop for in ",dados );


 dados = "";
 carros.forEach ((carro) => {
    dados += "<p>"+carro+"</p>" 
 })
 criaSecao("loop forEach",dados );

