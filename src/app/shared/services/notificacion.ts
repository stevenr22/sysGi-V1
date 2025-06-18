import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Notificacion {

  constructor(private toastr: ToastrService) {}

  // === TOASTR ===

  mostrarToastSuccess(mensaje: string, titulo: string = 'Éxito') {
    this.toastr.success(mensaje, titulo);
  }

  mostrarToastError(mensaje: string, titulo: string = 'Error') {
    this.toastr.error(mensaje, titulo);
  }

  mostrarToastInfo(mensaje: string, titulo: string = 'Información') {
    this.toastr.info(mensaje, titulo);
  }

  mostrarToastWarning(mensaje: string, titulo: string = 'Advertencia') {
    this.toastr.warning(mensaje, titulo);
  }

  // === SWEETALERT2 ===

  mostrarSweetSuccess(mensaje: string, titulo: string = 'Éxito') {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje,
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  }

  mostrarSweetError(mensaje: string, titulo: string = 'Error') {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: mensaje,
      confirmButtonText: 'Aceptar',
    });
  }

  mostrarSweetInfo(mensaje: string, titulo: string = 'Información') {
    Swal.fire({
      icon: 'info',
      title: titulo,
      text: mensaje,
      timer: 2500,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  }

  mostrarSweetWarning(mensaje: string, titulo: string = 'Advertencia') {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: mensaje,
      confirmButtonText: 'OK',
    });
  }

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
