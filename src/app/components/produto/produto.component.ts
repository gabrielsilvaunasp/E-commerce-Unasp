import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto_model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  @Input() produto!: Produto;

  constructor() {}

  ngOnInit(): void {}
}
