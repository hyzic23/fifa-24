import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { VenueComponent } from './venue/venue.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "/login"},
    {path: "home", component: HomeComponent},
    {path: "venue", component: VenueComponent},
    {path: "locations", component: StadiumsComponent},
    {path: "login", component: LoginComponent},
];
