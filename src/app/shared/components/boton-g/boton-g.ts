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
  @Input() btnClass: string = 'btn btn-success btn-lg px-4 py-2 fw-semibold shadow rounded-pill';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

}
