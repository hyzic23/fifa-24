import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api';

  signup(data: any){
    return this.httpClient.post(`${this.baseUrl}/register`,  data);   
  }
}
