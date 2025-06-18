import { Component } from '@angular/core';
import { BotonG } from "../boton-g/boton-g";
import { Notificacion } from '../../services/notificacion';


@Component({
  selector: 'app-user',
  imports: [BotonG],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(private notificacion: Notificacion) {}
  guardar(){
    //Llamar al servicio de toast o de notificacion
    this.notificacion.success('Usuario guardado con exito'); 
  }
  eliminar(){
    //Llamar al servicio de toast o de notificacion
    this.notificacion.error('Usuario eliminado');
    
    

  }
  

  informacion(){
    //Llamar al servicio de toast o de notificacion
    this.notificacion.info('Noticia entrante');

  }

  advertencia(){
    //Llamar al servicio de toast o de notificacion
    this.notificacion.warning("Cuidado con lo que haces");

  }
}
