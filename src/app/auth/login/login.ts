import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Modales } from '../../shared/components/modales/modales';
import { BotonG } from "../../shared/components/botonG/boton-g";
import { Notificacion } from '../../shared/services/notificaciones/notificacion';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, Modales, BotonG],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private notificacion: Notificacion){}
  enviarRecuperacion(){
    console.log("FUNCIONO");
    this.notificacion.mostrarToastSuccess("Contraseña recuperada con exito");
  }
}
