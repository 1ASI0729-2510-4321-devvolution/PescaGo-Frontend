import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common"; // Importamos CommonModule para *ngFor

@Component({
  selector: "app-search-carriers",
  imports: [RouterLink, CommonModule], // Añadimos CommonModule
  templateUrl: "./search-carriers.component.html",
  styleUrl: "./search-carriers.component.css",
  standalone: true,
})
export class SearchCarriersComponent implements OnInit {
  carriersData = [
    {
      id: 1,
      image: "assets/images/truck-1.png",
      name: "Nombre de la empresa",
      description: "Descripción de la empresa",
      districts: ["Distrito 1", "Distrito 2", "Distrito 3"],
    },
    {
      id: 2,
      image: "assets/images/truck-2.png",
      name: "Nombre de la empresa",
      description: "Descripción de la empresa",
      districts: ["Distrito 1", "Distrito 2", "Distrito 3", "Distrito 4"],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
