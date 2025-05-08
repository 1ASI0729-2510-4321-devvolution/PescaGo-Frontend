import { Routes } from "@angular/router";
import { HomeComponent } from "./entrepreneur/pages/home/home.component";
import { SearchCarriersComponent } from "./entrepreneur/pages/search-carriers/search-carriers.component";
import { RequestStatusComponent } from "./entrepreneur/pages/request-status/request-status.component";
import { HiredServicesComponent } from "./entrepreneur/pages/hired-services/hired-services.component";

export const routes: Routes = [
  { path: "", redirectTo: "/entrepreneur/home", pathMatch: "full" }, // Redirige a Home por defecto
  { path: "entrepreneur/home", component: HomeComponent },
  { path: "entrepreneur/search-carriers", component: SearchCarriersComponent },
  { path: "entrepreneur/request-status", component: RequestStatusComponent },
  { path: "entrepreneur/hired-services", component: HiredServicesComponent },
];
