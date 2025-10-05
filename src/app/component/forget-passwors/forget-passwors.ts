import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-forget-passwors',
  standalone: true,

  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './forget-passwors.html',
  styleUrl: './forget-passwors.css'
})



export class ForgetPassworsComponent {

  email = '';
  message = '';
  error = '';

  constructor(private auth: Auth) { }

  onSubmit() {
    this.auth.forgotPassword(this.email).subscribe({
      next: (res:any )=> {
        this.message = res.message;
        this.error = '';
      },
      error: err => {
        this.error = err.error.message || err.error.error;
        this.message = '';
      }
    });
  }
}
