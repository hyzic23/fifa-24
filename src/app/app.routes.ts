import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', pathMatch: "full", redirectTo: "/login"},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: SignupComponent},
    {path: 'admin', component: AdminComponent, canActivate: [authGuard]}
];
