import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  categoriasOpcoes: any[] = [
    { alias: 'bota', label: 'Botas' },
    { alias: 'calcado-com-cordoes', label: 'Calçados com Cordões' },
    { alias: 'mocassim', label: 'Mocassins' },
    { alias: 'monge', label: 'Monges' },
    { alias: 'mula', label: 'Mulas' },

    { alias: 'escarpim', label: 'Escarpins' },
    { alias: 'sandalia', label: 'Sandálias' },
    { alias: 'soco', label: 'Socos' },
    { alias: 'tenis', label: 'Tênis' },
    { alias: 'sapatenis', label: 'Sapatênis' },
  ];
}
