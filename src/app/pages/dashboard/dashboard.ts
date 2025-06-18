import { Component } from '@angular/core';
import { Header } from "../../shared/components/partsDashboard/header/header";
import { Navbar } from "../../shared/components/partsDashboard/navbar/navbar";
import { Main } from "../../shared/components/partsDashboard/main/main";
import { Footer } from "../../shared/components/partsDashboard/footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbar, Main, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
