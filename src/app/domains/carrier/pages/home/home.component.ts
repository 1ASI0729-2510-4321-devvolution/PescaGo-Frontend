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
  carrierName: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.carrierId = parseInt(localStorage.getItem('carrierId') || '0', 10); // Recuperar el id
    this.carrierName = localStorage.getItem('carrierName') ; // Recuperar el id
    console.log('Carrier ID:', this.carrierId);
    console.log('Carrier Name:', this.carrierName);

  }
}
