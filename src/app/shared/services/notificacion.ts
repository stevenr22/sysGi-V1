import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {

  /**
   * Cambiar a `true` para usar ngx-toastr.
   * Cambiar a `false` para usar SweetAlert2.
   */
  private usarToastr = false;

  constructor(private toastr: ToastrService) {}

  /**
   * Notificación de éxito
   */
  success(mensaje: string, titulo: string = 'Éxito') {
    if (this.usarToastr) {
      this.toastr.success(mensaje, titulo);
    } else {
      Swal.fire({
        icon: 'success',
        title: titulo,
        text: mensaje,
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  }

  /**
   * Notificación de error
   */
  error(mensaje: string, titulo: string = 'Error') {
    if (this.usarToastr) {
      this.toastr.error(mensaje, titulo);
    } else {
      Swal.fire({
        icon: 'error',
        title: titulo,
        text: mensaje,
        confirmButtonText: 'Aceptar',
      });
    }
  }

  /**
   * Notificación de información
   */
  info(mensaje: string, titulo: string = 'Información') {
    if (this.usarToastr) {
      this.toastr.info(mensaje, titulo);
    } else {
      Swal.fire({
        icon: 'info',
        title: titulo,
        text: mensaje,
        timer: 2500,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  }

  /**
   * Notificación de advertencia
   */
  warning(mensaje: string, titulo: string = 'Advertencia') {
    if (this.usarToastr) {
      this.toastr.warning(mensaje, titulo);
    } else {
      Swal.fire({
        icon: 'warning',
        title: titulo,
        text: mensaje,
        confirmButtonText: 'Ok',
      });
    }
  }

  /**
   * Confirmación personalizada (solo con SweetAlert2)
   */
  confirmar(mensaje: string, titulo: string = '¿Estás seguro?'): Promise<boolean> {
    return Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((resultado) => resultado.isConfirmed);
  }
}
