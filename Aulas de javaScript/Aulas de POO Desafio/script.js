class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
       
    }
    mostrarDetalhes() {
        console.log (`O produto é: ${this.nome}`);
        console.log(`valor R$ ${this.preco.toFixed(2)}`)
       
    }
}

const produto1 = new Produto("Cadeira Gamer", 1200);
produto1.mostrarDetalhes();

class Eletronico extends Produto {
    constructor (nome, preco, garantia){
    super(nome, preco)
    this.garantia= garantia;
    }
    mostrarDetalhes(){
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Produto: ${this.garantia} meses`);
    } 

}

const celular = new Eletronico ("smartphone", 2500, 12)
    celular.mostrarDetalhes();


