import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {PacketDetailsComponent} from "../packet-details/packet-details.component";
import {MatFormField, MatInput, MatSuffix} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-offered-price',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatInput,
    MatFormField,
    MatIcon,
    MatSuffix,
  ],
  templateUrl: './offered-price.component.html',
  standalone: true,
  styleUrl: './offered-price.component.css'
})
export class OfferedPriceComponent {
  constructor(
      public dialogRef: MatDialogRef<OfferedPriceComponent>,
  ) {}
// Método para cerrar el diálogo
  closeDialog(): void {
    this.dialogRef.close();
  }
}
