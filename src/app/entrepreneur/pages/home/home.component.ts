import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [RouterLink], // Añadimos RouterLink aquí
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
