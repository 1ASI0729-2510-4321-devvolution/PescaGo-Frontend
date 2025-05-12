import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-hired-services",
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: "./hired-services.component.html",
  styleUrl: "./hired-services.component.css",
  standalone: true,
})
export class HiredServicesComponent implements OnInit {
  hiredServices = [
    {
      id: 1,
      carrierName: "Transportes del Mar",
      packageDescription: "Pescado fresco en cajas selladas",
      vehicleDetails: "Camión refrigerado - Placa ABC123",
      driverDetails: "Juan Pérez - Licencia A123456",
      requestDateTime: "2025-05-10T10:00:00",
    },
    {
      id: 2,
      carrierName: "Carga Oceánica",
      packageDescription: "Productos del mar congelados",
      vehicleDetails: "Camión de carga - Placa XYZ789",
      driverDetails: "María Gómez - Licencia B987654",
      requestDateTime: "2025-05-08T09:00:00",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
