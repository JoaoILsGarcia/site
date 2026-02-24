const {soma, subtracao, multiplicacao, divisao} = require("./calculadora"); 


console.log("soma:", soma(20, 2));
console.log("Subtração:", subtracao(20, 2));
console.log("Multiplicação:", multiplicacao(20, 2));
console.log("Divisão:", divisao(20, 2));
console.log("Divisão por zero:", divisao(10, 0));