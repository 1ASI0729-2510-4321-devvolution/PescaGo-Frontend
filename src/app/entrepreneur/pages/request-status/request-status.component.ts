import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-request-status",
  imports: [RouterLink, CommonModule],
  templateUrl: "./request-status.component.html",
  styleUrl: "./request-status.component.css",
  standalone: true,
})
export class RequestStatusComponent implements OnInit {
  requestData = [
    {
      id: 1,
      empresa: "Empresa 1",
      descripcion: "Pescado bonito fresco en caja sellada",
      estado: "Pendiente",
      precio: "--",
    },
    {
      id: 2,
      empresa: "Empresa 2",
      descripcion: "Pescado bonito fresco en caja sellada",
      estado: "Rechazado",
      precio: "--",
    },
    {
      id: 3,
      empresa: "Empresa 3",
      descripcion: "Pescado bonito fresco en caja sellada",
      estado: "Aceptado",
      precio: "50",
    },
    {
      id: 4,
      empresa: "Empresa 4",
      descripcion: "Pescado bonito fresco en caja sellada",
      estado: "Aceptado",
      precio: "70",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
