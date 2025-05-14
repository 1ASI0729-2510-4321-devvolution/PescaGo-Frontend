import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: 'app-home',
    imports: [
        RouterLink
    ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  carrierId: number | null = null;
  carrier: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.carrierId = parseInt(localStorage.getItem('carrierId') || '0', 10); // Recuperar el id
    console.log('Entrepreneur ID:', this.carrierId);

    if (this.carrierId) {
      this.apiService.getCarrierByUserId(this.carrierId).subscribe({
        next: (carrier) => {
          this.carrier = carrier;
        },
        error: (err) => {
          console.error("Error al cargar el carrier:", err);
        },
      });
    }
  }
}
