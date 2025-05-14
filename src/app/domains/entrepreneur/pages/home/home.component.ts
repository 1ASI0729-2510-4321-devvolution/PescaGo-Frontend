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
  entrepreneurName: string | null = null;


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = parseInt(localStorage.getItem('entrepreneurId') || '0', 10); // Recuperar el id
    this.entrepreneurName = localStorage.getItem('entrepreneurName') ; // Recuperar el id
    console.log('Entrepreneur ID:', this.entrepreneurId);
    console.log('Entrepreneur Name:', this.entrepreneurName);

  }
}

