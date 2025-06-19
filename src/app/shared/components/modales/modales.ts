import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modales',
  standalone: true,
  imports: [],
  templateUrl: './modales.html',
  styleUrl: './modales.css'
})
export class Modales {
  @Input() id: string = '';
}
