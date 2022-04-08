import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk','Thor', 'Capitan America']
  heroeBorrado: string = '';
//Metodo que al entrar borra(shift) el primer elemento del arreglo y regresa un string o un vacio
  borrarHeroe(){
    console.log('borrando...');
    //this.heroes.splice(this.heroes.length-1, 1);
    this.heroeBorrado = this.heroes.shift() || '';
    //this.heroeBorrado= heroeBorrado;
  };
}
