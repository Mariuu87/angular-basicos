import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Las declaraciones son todo aquellos componentes que se tienen de de ese modulo
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //Exports que cosas quiero hacer publicas fuera de este modulo
    exports: [
        ListadoComponent
    ],
    imports:[
        //Este modulo nos proporciona el ng for y ng If
        CommonModule
    ]

})
export class HeroesModule{

}