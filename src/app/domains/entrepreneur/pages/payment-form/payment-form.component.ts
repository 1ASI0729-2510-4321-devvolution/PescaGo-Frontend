import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {ApiService} from "../../../../core/services/api.service";

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

  constructor(private router: Router,private apiService: ApiService) {}

  submitPayment(): void {
    if (this.holderName && this.cardNumber && this.expiryDate && this.cvv) {
      const receipt = {
        requestId: this.requestId,
        holderName: this.holderName,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
        paymentDate: new Date().toISOString(),
      };

      // Llamar al servicio para guardar el recibo
      this.apiService.createReceipt(receipt).subscribe({
        next: () => {
          console.log("Recibo guardado:", receipt);
          alert("Pago realizado con éxito.");
          this.closeModal.emit();
          this.router.navigate(["/entrepreneur/request-status"]);
        },
        error: (err) => {
          console.error("Error al guardar el recibo:", err);
          alert("Ocurrió un error al procesar el pago.");
        },
      });
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }
}
