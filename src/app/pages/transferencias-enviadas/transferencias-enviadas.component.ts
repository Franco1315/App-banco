import { Component } from '@angular/core';
import { transferenciasEnviadas } from 'src/app/datos/transferencias-enviadas';
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';


@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})

export class TransferenciasEnviadasComponent {
  transferencias:any[] = [];
  ordenante: any = null; 

  constructor(private transferenciasService: TransferenciaService, private clienteService: ClienteService){ }

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
    if(this.ordenante){
      this.cargarTransferencias();
    }
  }

  cargarTransferencias(){
    this.transferenciasService
    .obtenerTransferenciasEnviadas(this.ordenante.id)
    .subscribe((transferenciasCargadas: any)=>{
      console.log(transferenciasCargadas);
      this.transferencias = transferenciasCargadas;
    });
  }
}
