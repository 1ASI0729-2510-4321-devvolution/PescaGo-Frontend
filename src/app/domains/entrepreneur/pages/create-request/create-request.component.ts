import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const carrierIds = params["carrierIds"]
        ? params["carrierIds"].split(",")
        : [];
      const allCarriers = [
        {
          id: 1,
          image: "assets/images/truck1.jpg",
          name: "Transportes del Mar",
          description: "Especialistas en transporte de pescado fresco",
          districts: ["Distrito 1", "Distrito 2", "Distrito 3"],
          selected: false,
        },
        {
          id: 2,
          image: "assets/images/truck2.jpg",
          name: "Carga Oceánica",
          description: "Transporte confiable para productos del mar",
          districts: ["Distrito 1", "Distrito 2", "Distrito 3", "Distrito 4"],
          selected: false,
        },
      ];
      this.selectedCarriers = allCarriers.filter((carrier) =>
        carrierIds.includes(String(carrier.id))
      );
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
    console.log("Solicitud enviada:", {
      carriers: this.selectedCarriers,
      packageDescription: this.packageDescription,
      quantity: this.quantity,
      weightTotal: this.weightTotal,
      length: this.length,
      width: this.width,
      height: this.height,
      pickupLocation: this.pickupLocation,
      deliveryLocation: this.deliveryLocation,
      pickupDateTime: this.pickupDateTime,
    });
    alert("Solicitud enviada con éxito. Redirigiendo a Estado de Solicitudes.");
    this.router.navigate(["/entrepreneur/request-status"]);
  }
}
