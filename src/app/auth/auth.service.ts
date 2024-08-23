import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api';

  //SignUp
  signup(data: any){
    return this.httpClient.post(`${this.baseUrl}/register`,  data);   
  }

  //Login
  login(data: any){
    return this.httpClient.post(`${this.baseUrl}/login`, data)
              .pipe(tap((result) => {
                localStorage.setItem('authUser', JSON.stringify(result));
              }));
  }

  //Logout
  logout(){
    localStorage.removeItem('authUser');
  }

  //IsLoggedIn
  isLoggedIn(){
    return localStorage.getItem('authUser') !== null;
  }
}
