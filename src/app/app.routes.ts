import { Routes } from "@angular/router";
import { HomeComponent } from "./entrepreneur/pages/home/home.component";
import { SearchCarriersComponent } from "./entrepreneur/pages/search-carriers/search-carriers.component";
import { RequestStatusComponent } from "./entrepreneur/pages/request-status/request-status.component";
import { HiredServicesComponent } from "./entrepreneur/pages/hired-services/hired-services.component";
import { CreateRequestComponent } from "./entrepreneur/pages/create-request/create-request.component";
import { SignInComponent } from "./iam/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./iam/pages/sign-up/sign-up.component";
import { PaymentGatewayComponent } from "./entrepreneur/pages/payment-gateway/payment-gateway.component";

export const routes: Routes = [
  { path: "", redirectTo: "/entrepreneur/home", pathMatch: "full" }, // Redirige a Home por defecto
  { path: "entrepreneur/home", component: HomeComponent },
  { path: "entrepreneur/search-carriers", component: SearchCarriersComponent },
  { path: "entrepreneur/request-status", component: RequestStatusComponent },
  { path: "entrepreneur/hired-services", component: HiredServicesComponent },
  { path: "entrepreneur/create-request", component: CreateRequestComponent },
  {
    path: "entrepreneur/payment-gateway/:id",
    component: PaymentGatewayComponent,
  },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
];
