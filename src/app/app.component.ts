import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  categoriasOpcoes: any[] = [
    { alias: 'cat-1', label: 'Categoria 1' },
    { alias: 'cat-2', label: 'Categoria 2' },
    { alias: 'cat-3', label: 'Categoria 3' },
  ];
}
