// função de busca de dados
function buscaDadosServidor() {
    //console só para ver a ordem de execução
  console.log("inicio da execução");
  //busca dados do servidor
  return new Promise((resolve, reject) => {
    console.log("Buscando dados do servidor");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("dados recebidos com sucesso");
      } else {
        reject("Falha ao buscar dados do servidor");
      }
    }, 2000);
  });
}

buscaDadosServidor()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });

  //outra forma de chamar uma função assincrona com async, await( deixa o codigo mais limpo)
const minhaFuncaoAssincrona = async () => {
   
  try {
    const resultado = await buscaDadosServidor();
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
};
minhaFuncaoAssincrona();

// console para ver a ordem de exeução assincrona esse console vai ser execurado primeiro depois vem a execução da busca
console.log("Final da execução");


