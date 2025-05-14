import { Component, OnInit } from "@angular/core";
import {Router, RouterLink} from "@angular/router";
import {ApiService} from "../../../../core/services/api.service";

@Component({
  selector: "app-home",
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  standalone: true
})
export class HomeComponent implements OnInit {
  entrepreneurId: number | null = null;
  entrepreneurName: string | null = null;


  constructor(
      private route:Router,
      private apiService: ApiService) {}

  ngOnInit(): void {
    this.entrepreneurId = parseInt(localStorage.getItem('entrepreneurId') || '0', 10);
    this.entrepreneurName = localStorage.getItem('entrepreneurName') ;
    console.log('Entrepreneur ID:', this.entrepreneurId);
    console.log('Entrepreneur Name:', this.entrepreneurName);
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/sign-in']);
  }
}
