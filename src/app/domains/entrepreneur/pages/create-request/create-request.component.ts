import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: "app-create-request",
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: "./create-request.component.html",
  styleUrl: "./create-request.component.css",
  standalone: true,
})
export class CreateRequestComponent implements OnInit {
  selectedCarriers: any[] = [];
  packageDescription: string = "";
  quantity: number = 0;
  weight: number = 0; // Este campo se reemplaza por weightTotal
  deliveryDate: string = ""; // Este campo se reemplaza por pickupDateTime
  weightTotal: number = 0;
  length: number = 0;
  width: number = 0;
  height: number = 0;
  pickupLocation: string = "";
  deliveryLocation: string = "";
  pickupDateTime: string = "";

  entrepreneurId: string | null = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = localStorage.getItem('entrepreneurId'); // Recuperar el id
    console.log('Entrepreneur ID:', this.entrepreneurId);

    this.route.queryParams.subscribe((params) => {
      const carrierIds = params["carrierIds"]
          ? params["carrierIds"].split(",").map((id: string) => parseInt(id, 10))
          : [];

      if (carrierIds.length > 0) {
        this.apiService.getCarriers().subscribe({
          next: (carriers) => {
            this.selectedCarriers = carriers.filter((carrier) =>
                carrierIds.includes(carrier.id)
            );
          },
          error: (err) => {
            console.error("Error al cargar los carriers:", err);
          },
        });
      }
    });
  }

  submitRequest(): void {
    if (
        !this.packageDescription ||
        this.quantity <= 0 ||
        this.weightTotal <= 0 ||
        !this.pickupLocation ||
        !this.deliveryLocation ||
        !this.pickupDateTime ||
        this.length <= 0 ||
        this.width <= 0 ||
        this.height <= 0
    ) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const request = {
      entrepreneurId: this.entrepreneurId,
      carriers: this.selectedCarriers.map((carrier) => carrier.id),
      packageDescription: this.packageDescription,
      quantity: this.quantity,
      weightTotal: this.weightTotal,
      dimensions: {
        length: this.length,
        width: this.width,
        height: this.height,
      },
      pickupLocation: this.pickupLocation,
      deliveryLocation: this.deliveryLocation,
      pickupDateTime: this.pickupDateTime,
    };

    this.apiService.createRequest(request).subscribe({
      next: () => {
        alert("Solicitud enviada con éxito. Redirigiendo a Estado de Solicitudes.");
        this.router.navigate(["/entrepreneur/request-status"]);
      },
      error: (err) => {
        console.error("Error al guardar la solicitud:", err);
        alert("Ocurrió un error al enviar la solicitud. Inténtalo nuevamente.");
      },
    });
  }
}
