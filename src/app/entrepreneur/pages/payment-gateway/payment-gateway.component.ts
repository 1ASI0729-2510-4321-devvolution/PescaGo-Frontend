import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, ActivatedRoute } from "@angular/router";
import { trigger, transition, style, animate } from "@angular/animations";
import { PaymentFormComponent } from "../payment-form/payment-form.component";

@Component({
  selector: "app-payment-gateway",
  imports: [CommonModule, RouterLink, PaymentFormComponent],
  templateUrl: "./payment-gateway.component.html",
  styleUrl: "./payment-gateway.component.css",
  standalone: true,
  animations: [
    trigger("fadeAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms", style({ opacity: 1 })),
      ]),
      transition(":leave", [animate("300ms", style({ opacity: 0 }))]),
    ]),
  ],
})
export class PaymentGatewayComponent implements OnInit {
  requestId: number | null = null;
  showPaymentModal: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.requestId = +params["id"];
    });
  }

  selectMethod(method: string): void {
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
  }
}
