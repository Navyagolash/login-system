import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login';
import { SignupComponent } from './component/signup/signup';
import { ForgetPassworsComponent } from './component/forget-passwors/forget-passwors';
import { ResetPassword } from './component/reset-password/reset-password';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgetPassworsComponent },
  { path: 'reset-password/:token', component: ResetPassword },
  // { path: '', redirectTo: '/forgot-password', pathMatch: 'full' }
];

