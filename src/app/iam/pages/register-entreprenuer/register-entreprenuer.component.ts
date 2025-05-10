import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-entreprenuer',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField
  ],
  templateUrl: './register-entreprenuer.component.html',
  standalone: true,
  styleUrl: './register-entreprenuer.component.css'
})
export class RegisterEntreprenuerComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imagePreview: string | null = null; // Vista previa de la imagen cargada


  constructor(private router: Router) {}

  // Disparar el input de archivo
  triggerFileInput(): void {
    this.fileInput.nativeElement.click(); // Accede directamente al elemento input
  }

  // Manejar la selección de archivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result as string; // Guardar la vista previa
        localStorage.setItem('cachedImage', this.imagePreview); // Guardar en caché
      };

      reader.readAsDataURL(file); // Leer el archivo como Data URL
    }
  }


  async onSubmit() {
    console.log('Formulario enviado');
    try {
      const success = await this.router.navigate(['/entrepreneur/home']);
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
