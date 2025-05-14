import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: "app-hired-services",
  imports: [RouterLink, CommonModule, DatePipe],
  templateUrl: "./hired-services.component.html",
  styleUrl: "./hired-services.component.css",
  standalone: true,
})
export class HiredServicesComponent implements OnInit {
  hiredServices: any[] = [];
  entrepreneurId: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = localStorage.getItem("entrepreneurId");
    console.log("Entrepreneur ID:", this.entrepreneurId);

    if (this.entrepreneurId) {
      this.apiService.getHiredServicesByEntrepreneurId(this.entrepreneurId).subscribe({
        next: (services) => {
          this.hiredServices = services;
        },
        error: (err) => {
          console.error("Error al cargar los servicios contratados:", err);
        },
      });
    }
  }
}