import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: "app-home",
  imports: [RouterLink], // Añadimos RouterLink aquí
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  standalone: true
})
export class HomeComponent implements OnInit {
  entrepreneurId: number | null = null;
  entreprenuer: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = parseInt(localStorage.getItem('carrierId') || '0', 10); // Recuperar el id
    console.log('Entrepreneur ID:', this.entrepreneurId);

    if (this.entrepreneurId) {
      this.apiService.getEntrepreneurById(this.entrepreneurId).subscribe({
        next: (entreprenuer) => {
          this.entreprenuer = entreprenuer;
        },
        error: (err) => {
          console.error("Error al cargar el entreprenuer:", err);
        },
      });
    }
  }
}

