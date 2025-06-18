import { Component } from '@angular/core';
// import { User } from "./shared/components/user/user"; //pruebas
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
