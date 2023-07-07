import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private http: HttpClient) { }

  urlApi: string = 'http://localhost:8080/transferencia'

  //traer todas las transferencias

  obtenerTransferencias() {
    return this.http.get(this.urlApi);
  }

  obtenetTransferenciaPorId(id: number) {
    return this.http.get(this.urlApi + "/" + id);
  }

  guardar(transferencia: any) {
    return this.http.post(this.urlApi, transferencia);
  }

  obtenerTransferenciasEnviadas(id: number) {
    return this.http.get(this.urlApi + "/ordenante/" + id);
  }

  obtenerTransferenciasRecibidas(id: number) {
    return this.http.get(this.urlApi + "/beneficiario/" + id);
  }


}
