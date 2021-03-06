import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { produtosMock } from 'src/app/data/produtos';
import { Produto } from 'src/app/models/produto_model';

@Component({
  selector: 'app-produtos-por-categoria',
  templateUrl: './produtos-por-categoria.component.html',
  styleUrls: ['./produtos-por-categoria.component.scss'],
})
export class ProdutosPorCategoriaComponent implements OnInit {
  produtosFiltrados: Produto[];
  categoria: string;

  constructor(public rota: ActivatedRoute) {
    this.produtosFiltrados = [];
    this.categoria = '';

    this.rota.params.subscribe((data) => {
      this.produtosFiltrados = produtosMock.filter(
        (produtoMock) => produtoMock.categoria == data['categoria']
      );
    });

    this.rota.queryParamMap.subscribe((params) => {
      this.categoria = params.get('label')!;
    });
  }

  ngOnInit(): void {}
}
