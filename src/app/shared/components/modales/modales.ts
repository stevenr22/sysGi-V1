import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotonG } from "../botonG/boton-g";

@Component({
  selector: 'app-modales',
  standalone: true,
  imports: [BotonG],
  templateUrl: './modales.html',
  styleUrl: './modales.css'
})
export class Modales {
  @Input() modalId: string = 'modalReutilizable';
  @Input() titulo: string = 'Titutlo del modal';

  @Output() guardar = new EventEmitter<void>();
  
  //EMITIR EVENTOS HACI EL COMPONENTE PADRE CUANDO EL USUARIO HAGA CLICK, EN GUARDAR O CERRAR
  //CON @OUTPUT() CONN EVENTEMITTTER SE USA PARA NOTIFICAR AL COMPONENETE PADRE
  onGuardar(){
    this.guardar.emit();
  }

}
