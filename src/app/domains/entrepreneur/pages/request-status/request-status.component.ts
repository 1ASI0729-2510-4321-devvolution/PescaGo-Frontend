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
  
}
