import { Component } from '@angular/core';
import { User } from "./components/user/user";
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
