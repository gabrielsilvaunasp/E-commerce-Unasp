export class Produto {
  nome: string;
  categoria: string;
  srcImagem: string;

  constructor(produto: Produto) {
    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.srcImagem = produto.srcImagem;
  }
}
