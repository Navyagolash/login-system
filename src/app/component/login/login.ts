import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  Loginform!: FormGroup;

  constructor(private fb: FormBuilder, private auth: Auth) { }

  ngOnInit() {
    this.Loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.Loginform.invalid) return;

    const data = {
      email: this.Loginform.value.username,  // 👈 if backend expects email
      password: this.Loginform.value.password
    };

    this.auth.login(data).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        alert('Login Successful ✅');
      },
      error: err => {
        alert(err.error.message || 'Login failed ❌');
      }
    });
  }
}
