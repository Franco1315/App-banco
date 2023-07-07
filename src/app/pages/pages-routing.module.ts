import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { loginGuard } from '../guards/login.guard';


const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [loginGuard]
  },

  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent
  },
  
  {
    path: 'transferencias/:id',
    component: DetalleTransferenciaComponent
  },

  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent
  },
  
  {
    path: 'transferencias-enviadas',
    component: TransferenciasEnviadasComponent
  },

  {
    path: 'mi-cuenta',
    component: MiCuentaComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'transferencias',
    component: TransferenciasComponent,
    canActivate: [loginGuard]
    
  },
  {
    path: 'nueva-transferencias',
    component: NuevaTransferenciaComponent
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
