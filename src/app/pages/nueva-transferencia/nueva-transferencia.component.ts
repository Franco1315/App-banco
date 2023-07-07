import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit{
  nuevaTransferencia: any ={
    ordenante:{
      id: null ,
    },
    beneficiario:{
      id: null,
    },
    concepto:'',
    importe:0,
  };

  //para guardar un cliente logueado y usarlo como ordenante 
  ordenante: any = null;

  feedback: String = "";

constructor(
  private transferenciaService: TransferenciaService,
  private clienteService: ClienteService){}

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion();
  }

enviarTransferencia(){
  if(this.ordenante){
      this.nuevaTransferencia.ordenante.id = this.ordenante.id;
      this.transferenciaService.guardar(this.nuevaTransferencia).subscribe(
      (transferenciaGuardada) => {
        //aqui ya tendremos la transferencia guardada
        console.log({transferenciaGuardada})
        this.feedback = "transferencia enviada";
      },
      (error)=>{
        console.log(error);
        this.feedback = "Error al enviar transferencias";
      }
      );

  }

}

}


