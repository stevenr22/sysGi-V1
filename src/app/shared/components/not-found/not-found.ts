import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  constructor(private toastr: ToastrService, private location: Location) {}

  ngOnInit(): void {
    this.toastr.error('La pagina que buscas no existe', 'Error 404', {
      timeOut: 3000,
      positionClass: 'toast-top-center'
    });

    setTimeout(() => {
      this.location.back(); // Regresa a la página anterior
    }, 3000);
  }
}