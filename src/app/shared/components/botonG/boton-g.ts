import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton-g',
  standalone: true,
  imports: [],
  templateUrl: './boton-g.html',
  styleUrl: './boton-g.css'
})
export class BotonG {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary'; // valor por defecto
  @Input() btnClass: string = '';
  @Input() disabled: boolean = false;

  // NUEVO INPUT OPCIONAR PARA CERRAR MODALES
  @Input() dismiss: string | null = null;

  
  @Output() onClick = new EventEmitter<Event>();

  get classes(): string {
    // Construye las clases de Bootstrap dinámicamente
    return `btn btn-${this.color} ${this.btnClass}`;
  }

}
