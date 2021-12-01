import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categoriasOpcoes: string[] = ["Categoria 1", "Categoria 2", "Categoria 3"]

  filtrarPorCategoria(categoria: any){
    // teste
    console.log(categoria)
  }
}
