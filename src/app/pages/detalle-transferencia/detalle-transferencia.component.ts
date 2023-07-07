import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from 'src/app/service/transferencia/transferencia.service';

@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent implements OnInit {

  //para guardar la transferencia leída
  transferencia: any = null;

  constructor(
    private route: ActivatedRoute, 
    private transferenciasService: TransferenciaService){}

  ngOnInit(): void {
    let transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if(transferenciaIdString){
      transferenciaId = parseInt(transferenciaIdString);
      console.log({transferenciaId});
      this.transferenciasService
      .obtenetTransferenciaPorId(transferenciaId)
      .subscribe((transferencia: any)=>{
        console.log({transferencia});
        this.transferencia = transferencia;
      });
      
    }
  }



}
