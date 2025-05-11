import { Routes } from "@angular/router";
import { HomeComponent as EntrepreneurHomeComponent } from "./entrepreneur/pages/home/home.component";
import { HomeComponent as CarrierHomeComponent } from "./carrier/pages/home/home.component";
import { SearchCarriersComponent } from "./entrepreneur/pages/search-carriers/search-carriers.component";
import { RequestStatusComponent } from "./entrepreneur/pages/request-status/request-status.component";
import { HiredServicesComponent } from "./entrepreneur/pages/hired-services/hired-services.component";
import { CreateRequestComponent } from "./entrepreneur/pages/create-request/create-request.component";
import { SignInComponent } from "./iam/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./iam/pages/sign-up/sign-up.component";
import { PaymentGatewayComponent } from "./entrepreneur/pages/payment-gateway/payment-gateway.component";
import {RegisterCarrierComponent} from "./iam/pages/register-carrier/register-carrier.component";
import {RegisterEntreprenuerComponent} from "./iam/pages/register-entreprenuer/register-entreprenuer.component";
import {ConfirmedServicesComponent} from "./carrier/pages/confirmed-services/confirmed-services.component";
import {RequestsComponent} from "./carrier/pages/requests/requests.component";
import {PacketDetailsComponent} from "./carrier/components/packet-details/packet-details.component";

export const routes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: "full" }, // Redirige a Home por defecto

  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "register-carrier", component:RegisterCarrierComponent },
  { path: "register-entrepreneur", component: RegisterEntreprenuerComponent },

  { path: "entrepreneur/home", component: EntrepreneurHomeComponent },
  { path: "entrepreneur/search-carriers", component: SearchCarriersComponent },
  { path: "entrepreneur/request-status", component: RequestStatusComponent },
  { path: "entrepreneur/hired-services", component: HiredServicesComponent },
  { path: "entrepreneur/create-request", component: CreateRequestComponent },
  { path: "entrepreneur/payment-gateway/:id", component: PaymentGatewayComponent },

  { path: "carrier/home", component: CarrierHomeComponent },
  { path: "carrier/confirmed-services", component: ConfirmedServicesComponent },
  { path: "carrier/requests", component: RequestsComponent },
  { path: "carrier/packet-details", component: PacketDetailsComponent },

];
