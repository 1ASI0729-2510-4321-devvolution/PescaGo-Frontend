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

    entrepreneurId: number | null = null;
    entrepreneurName: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService) {}

    ngOnInit(): void {
        this.entrepreneurId = parseInt(localStorage.getItem('entrepreneurId') || '0', 10); // Recuperar el id
        this.entrepreneurName = localStorage.getItem('entrepreneurName') ; // Recuperar el id
        console.log('Entrepreneur ID:', this.entrepreneurId);
        console.log('Entrepreneur Name:', this.entrepreneurName);

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

        if (this.selectedCarriers.length === 0) {
            alert("Por favor, selecciona al menos un carrier.");
            return;
        }

        const requests = this.selectedCarriers.map((carrier) => ({
            entrepreneurId: this.entrepreneurId,
            entrepreneurName: this.entrepreneurName,
            carrierId: carrier.id,
            carrierName: carrier.name,
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
            price: 0, // Este campo se puede calcular o dejar en 0 por ahora
            status: "Pendiente", // Estado inicial de la solicitud
        }));

        // Enviar cada solicitud al API
        requests.forEach((request) => {
            this.apiService.createRequest(request).subscribe({
                next: () => {
                    console.log("Solicitud creada para el carrier:", request.carrierName);
                },
                error: (err) => {
                    console.error("Error al guardar la solicitud:", err);
                },
            });
        });

        alert("Solicitudes enviadas con éxito. Redirigiendo a Estado de Solicitudes.");
        this.router.navigate(["/entrepreneur/request-status"]);
    }
}
