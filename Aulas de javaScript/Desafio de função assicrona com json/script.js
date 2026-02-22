function carregarProdutos(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject("X Erro: id do produto inválido");
        return;
      }
      const produto = {
        id: id,
        nome: "notebook",
        preco: 3500,
      };

      resolve(produto);
    }, 2000);
  });
}

carregarProdutos(1)
  .then((produto) => {
    console.log("Objeto original:", produto);
    console.log("Produto carregado:", produto);

    const produtoJSON = JSON.stringify(produto);
    console.log("Produto em JSON:", produtoJSON);

    const produtoObjt = JSON.parse(produtoJSON);
    console.log("JSON convertido em objeto", produtoObjt);
  })
  .catch((erro) => {
    console.error("Erro capturado:", erro);
  });

const minhaFuncaoAsync = async () => {
  try {
    const resultado = await carregarProdutos(1);
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
};

minhaFuncaoAsync();
