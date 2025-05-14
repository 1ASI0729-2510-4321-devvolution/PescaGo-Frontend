import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: "app-request-status",
  imports: [RouterLink, CommonModule],
  templateUrl: "./request-status.component.html",
  styleUrl: "./request-status.component.css",
  standalone: true,
})
export class RequestStatusComponent implements OnInit {
  requestData: any[] = [];
  entrepreneurId: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = localStorage.getItem('entrepreneurId'); // Recuperar el id
    console.log('Entrepreneur ID:', this.entrepreneurId);

    if (this.entrepreneurId) {
      this.apiService.getRequestsByEntrepreneurId(this.entrepreneurId).subscribe({
        next: (requests) => {
          this.requestData = requests;
        },
        error: (err) => {
          console.error("Error al cargar los requests:", err);
        },
      });
    }
  }
}
