import { Component } from '@angular/core';
import { Header } from "../../components/partsDashboard/header/header";
import { Navbar } from "../../components/partsDashboard/navbar/navbar";
import { Main } from "../../components/partsDashboard/main/main";
import { Footer } from "../../components/partsDashboard/footer/footer";

@Component({
  selector: 'app-dashboard',
  imports: [Header, Navbar, Main, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
