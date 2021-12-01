export class Produto {
  id: number;
  nome: string;
  categoria: string;
  srcImagem: string;

  constructor(produto: Produto) {
    {
      this.id = produto.id;
      this.nome = produto.nome;
      this.categoria = produto.categoria;
      this.srcImagem = produto.srcImagem;
    }
  }
}
