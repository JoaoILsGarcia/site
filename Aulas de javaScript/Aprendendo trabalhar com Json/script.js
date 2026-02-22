const produtos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça", preco: 39.99 },
  { id: 3, nome: "Tênis", preco: 299.9 },
];

const produtosJason = JSON.stringify(produtos);
console.log(produtos);
console.log(produtosJason);

const produtosObj = JSON.parse(produtosJason);
console.log(produtosObj);
