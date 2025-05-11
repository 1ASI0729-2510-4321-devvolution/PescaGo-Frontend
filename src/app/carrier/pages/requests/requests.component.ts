import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-requests',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './requests.component.html',
  standalone: true,
  styleUrl: './requests.component.css'
})
export class RequestsComponent implements OnInit{
  requestData = [
    {
      id: 1,
      empresa: "Empresa 1",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      estado: "Pendiente",
    },
    {
      id: 2,
      empresa: "Empresa 2",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      estado: "Rechazado",
    },
    {
      id: 3,
      empresa: "Empresa 3",
      recojo: "Av NNN 123",
      entrega: "Calles 123",
      fecha: "12/10/2023 22:12h",
      estado: "Aceptado",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
