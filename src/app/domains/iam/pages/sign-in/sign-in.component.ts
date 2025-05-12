import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatFormField, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-sign-in',
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatButton,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix
  ],
  templateUrl: './sign-in.component.html',
  standalone: true,
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
