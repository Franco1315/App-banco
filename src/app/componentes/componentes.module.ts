import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTransferenciasComponent } from './tabla-transferencias/tabla-transferencias.component';
import { RouterModule } from '@angular/router';



@NgModule({
  //cosas que pertenecen al modulo
  declarations: [
    TablaTransferenciasComponent
  ],
  //cosas que necesitamos en este modulo
  imports: [
    CommonModule,
    RouterModule
  ],
  //componentes declarados en el modulo que se pueden usar afuera
  exports: [
    TablaTransferenciasComponent
  ]
})
export class ComponentesModule { }
