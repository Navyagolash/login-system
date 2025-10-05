import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
CommonModule
@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPassword {
  newPassword = '';
  message = '';
  error = '';
  token = '';

  constructor(private route: ActivatedRoute, private auth: Auth,private router:Router) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  onSubmit() {
    this.auth.resetPassword(this.token, this.newPassword).subscribe({
      next: (res :any)=> {
        this.message = res.message;
        this.error = '';
         this.router.navigate(['/login']);  

            

      },
      error: err => {
        this.error = err.error.message || err.error.error;
        this.message = '';
      }
    });
  }
}
