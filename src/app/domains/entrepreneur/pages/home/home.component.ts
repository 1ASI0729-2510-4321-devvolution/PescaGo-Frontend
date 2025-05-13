import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [RouterLink], // Añadimos RouterLink aquí
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  standalone: true
})
export class HomeComponent implements OnInit {
  entrepreneurId: string | null = null;

  ngOnInit(): void {
    this.entrepreneurId = localStorage.getItem('entrepreneurId'); // Recuperar el id
    console.log('Entrepreneur ID:', this.entrepreneurId);
  }
}

