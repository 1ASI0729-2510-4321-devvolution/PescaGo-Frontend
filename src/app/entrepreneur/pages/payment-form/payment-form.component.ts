import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-payment-form",
  imports: [CommonModule, FormsModule],
  templateUrl: "./payment-form.component.html",
  styleUrl: "./payment-form.component.css",
  standalone: true,
})
export class PaymentFormComponent {
  @Input() requestId: number | null = null;
  @Output() closeModal = new EventEmitter<void>();
  holderName: string = "";
  cardNumber: string = "";
  expiryDate: string = "";
  cvv: string = "";

  constructor(private router: Router) {}

  submitPayment(): void {
    if (this.holderName && this.cardNumber && this.expiryDate && this.cvv) {
      console.log("Pago realizado:", {
        requestId: this.requestId,
        holderName: this.holderName,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
      });
      alert("Pago realizado con éxito.");
      this.closeModal.emit();
      this.router.navigate(["/entrepreneur/request-status"]);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }
}
