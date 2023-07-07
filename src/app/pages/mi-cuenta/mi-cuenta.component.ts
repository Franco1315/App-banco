import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent {
  password2: string = "";
  password: string = "";

  mensajePass: string = "";

  constructor(private router: Router){
    
  }

  modificarLogin() {

    console.log("validando", this.password)
    if (!this.password || !this.password2) {
      this.mensajePass = "No has introducido contraseña"
      return;
    }

    if (this.password === this.password2) {
      this.mensajePass = "Contraseña actualizada"
    } else {
      this.mensajePass = "Las contraseñas no son iguales"
    }
  }

  cerrarSesion(){
    sessionStorage.removeItem("sesion");
    this.router.navigateByUrl("/auth/login")
    
  }
}

