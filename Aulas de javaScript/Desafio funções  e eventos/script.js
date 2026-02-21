function crientePedido(numeroPedido) {
  switch (numeroPedido) {
    case "1":
      return "Pizza de calabresa";
    case "2":
      return "Pizza de quatro queijos";
    case "3":
      return "Pizza de frango com catupiry";
    case "4":
      return "Pizza de brigadeiro";
    default:
      return "Número do pedido inválido";
  }
}

function mostrarPedido() {
  const pedidoSelecionado = document.getElementById("pedido").value;
  const resultado = document.getElementById("resultado");

  resultado.textContent = crientePedido(pedidoSelecionado);
}