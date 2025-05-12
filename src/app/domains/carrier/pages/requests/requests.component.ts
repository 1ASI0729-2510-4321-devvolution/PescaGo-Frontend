import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PacketDetailsComponent} from "../../components/packet-details/packet-details.component";
import {OfferedPriceComponent} from "../../components/offered-price/offered-price.component";

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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openPacketDetails(): void {
    this.dialog.open(PacketDetailsComponent, {
      data: {}, // Puedes pasar datos al componente si es necesario
      panelClass: 'carrier-packet-details-dialog-container', // Clase CSS personalizada está en styles.css
    });
  }
  openOfferedPrice(): void {
    this.dialog.open(OfferedPriceComponent, {
      data: {}, // Puedes pasar datos al componente si es necesario
      panelClass: 'carrier-offered-price-dialog-container', // Clase CSS personalizada está en styles.css
    });
  }

}
