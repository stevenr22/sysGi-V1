import { Component } from '@angular/core';
import { BotonG } from "../boton-g/boton-g";
import { Notificacion } from '../../services/notificaciones/notificacion';

@Component({
  selector: 'app-user',
  imports: [BotonG],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(private notificacion: Notificacion) {}

  // TOAST
  guardar() {
    this.notificacion.mostrarToastSuccess('Usuario guardado correctamente');
  }

  eliminar() {
    this.notificacion.mostrarToastError('El usuario ha sido eliminado');
  }

  async confirmarEliminacion() {
    const confirmado = await this.notificacion.confirmar("¿Estás seguro? Esta acción no se puede deshacer.");
    if (confirmado) {
      this.notificacion.mostrarToastSuccess("Usuario eliminado correctamente");
    } else {
      this.notificacion.mostrarToastInfo("Eliminación cancelada");
    }
  }

  informacion() {
    this.notificacion.mostrarToastInfo('Tienes una nueva notificación');
  }

  advertencia() {
    this.notificacion.mostrarToastWarning("Atención: revisa los datos antes de continuar");
  }

  // SWEET ALERT
  guardarSwal() {
    this.notificacion.mostrarSweetSuccess("¡Usuario guardado exitosamente!");
  }

  eliminarSwal() {
    this.notificacion.mostrarSweetError("El usuario ha sido eliminado permanentemente");
  }

  informacionSwal() {
    this.notificacion.mostrarSweetInfo("Información: los datos han sido almacenados");
  }

  advertenciaSwal() {
    this.notificacion.mostrarSweetWarning("Advertencia: esta acción puede tener consecuencias");
  }
}