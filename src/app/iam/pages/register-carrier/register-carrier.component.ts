import { Component } from '@angular/core';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-carrier',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './register-carrier.component.html',
  standalone: true,
  styleUrl: './register-carrier.component.css'
})
export class RegisterCarrierComponent {

  constructor(private router: Router) {}

  async onSubmit() {
    console.log('Formulario enviado');
    try {
      const success = await this.router.navigate(['/ruta-destino']);
      if (success) {
        console.log('Navegación exitosa');
      } else {
        console.error('Error al navegar');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
    }
  }

}
