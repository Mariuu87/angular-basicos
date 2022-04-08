import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    //Las declaraciones son todo aquellos componentes que se tienen de ese modulo
    declarations:[
        ContadorComponent
    ],
    //Exports que cosas quiero hacer publicas fuera de este modulo
    exports:[
        ContadorComponent
    ]

})
export class ContadorModule{

} 