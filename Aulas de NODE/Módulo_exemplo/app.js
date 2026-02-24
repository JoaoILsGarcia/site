var pessoa= require("./Commons/pessoa");
var soma = require("./Commons/soma");
var imposto = require("./Commons/calculoImposto")

joao = pessoa();

//console.log(JSON.stringify(joao));
//console.log(soma(2,2));

console.log("Valor do produto com imposto:" + imposto.adicionar(10));4
console.log("Valor do imposto:" + imposto.valor(10));
console.log("taxa do imposto:" + imposto.taxa);

