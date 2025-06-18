import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  //Indica que el servicio es singleton y disponible en toda la app
  providedIn: 'root'
})
export class Notificacion {
  //Inyectamos el servicios toastr de ngx-toastr para mostrar los toasts
  constructor(private toastr: ToastrService) { }
  /*
    * Mostrar una Notificacion de exito
    * @param mensaje Texto que se mostrara en el toast
    * @param titulo Titutlo opcional del toast (por defecti "Exito")
  */
  success(mensaje: string, titulo: string = 'Exito') {
    this.toastr.success(mensaje, titulo);
  }


  /*
   *Mostrar una notificacion de error
   * @param mensaje Texto que se mostrara en el toast
   * @param titulo Titutlo opcional del toast (por defecto "Error")
   
  */
  error(mensaje: string, titulo: string = 'Error') {
    this.toastr.error(mensaje, titulo);
  }

  /*
  *Mostrar una notificacion de informativa
  * @param mensaje Texto que se mostrara en el toast
  * @param titulo Titutlo opcional del toast (por defecto "Informacion")
  
 */
  info(mensaje: string, titulo: string = 'Información') {
    this.toastr.info(mensaje, titulo);
  }

  /*
*Mostrar una notificacion de de alerta
* @param mensaje Texto que se mostrara en el toast
* @param titulo Titutlo opcional del toast (por defecto "Alerta")
 
*/
  warning(mensaje: string, titulo: string = 'Advertencia') {
    this.toastr.warning(mensaje, titulo);
  }


}
