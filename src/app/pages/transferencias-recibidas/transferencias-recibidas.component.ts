import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplo'; 
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})

export class TransferenciasRecibidasComponent {
  transferencias:any[] = [];
  beneficiario: any = null; 


  constructor(private transferenciasService: TransferenciaService, private clienteService: ClienteService){ }

  ngOnInit(){
    this.beneficiario = this.clienteService.leerSesion();
    if(this.beneficiario){
      this.cargarTransferencias();
    }
  }

  cargarTransferencias(){
    this.transferenciasService
    .obtenerTransferenciasRecibidas(this.beneficiario.id)
    .subscribe((transferenciasCargadas: any)=>{
      console.log(transferenciasCargadas);
      this.transferencias = transferenciasCargadas;
    });
  }
}
