import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BotonG } from "../../shared/components/botonG/boton-g";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, BotonG],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
