import { Component, OnInit } from "@angular/core";
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-search-carriers",
  imports: [RouterLink, CommonModule, FormsModule],
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
      selected: false, // Propiedad para el checkbox
    },
    {
      id: 2,
      image: "assets/images/truck-2.png",
      name: "Nombre de la empresa",
      description: "Descripción de la empresa",
      districts: ["Distrito 1", "Distrito 2", "Distrito 3", "Distrito 4"],
      selected: false, // Propiedad para el checkbox
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Método para manejar el botón "Enviar Solicitud"
  submitRequest(): void {
    const selectedCarriers = this.carriersData.filter(
      (carrier) => carrier.selected
    );
    if (selectedCarriers.length === 0) {
      alert(
        "Por favor, selecciona al menos una empresa antes de enviar la solicitud."
      );
      return;
    }
    // Redirección a create-request con los IDs de las empresas seleccionadas
    const selectedIds = selectedCarriers.map((carrier) => carrier.id);
    this.router.navigate(["/entrepreneur/create-request"], {
      queryParams: { carrierIds: selectedIds.join(",") },
    });
  }
}
