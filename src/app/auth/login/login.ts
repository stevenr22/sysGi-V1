import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Modales } from "../../shared/components/modales/modales";

import { Notificacion } from '../../shared/services/notificaciones/notificacion';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, Modales],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private notificacion: Notificacion){}
  handleGuardar(){
    this.notificacion.mostrarToastSuccess("SE GUARDO CON EXITO");
  }

}
