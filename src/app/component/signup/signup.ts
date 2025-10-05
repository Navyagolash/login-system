import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  standalone: true,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupComponent {

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: Auth,private router:Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) return;

    this.auth.signup(this.signUpForm.value).subscribe({
      next: res => {
        alert('Signup Successful ✅');
         this.router.navigate(['/login']);  
      },
      error: err => {
        alert(err.error.message || 'Signup failed ❌');
      }
    });
  }
}
