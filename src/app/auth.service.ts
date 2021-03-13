import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(item:object){
    return this.http.post<any>('http://localhost:4000/login', item)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  isAdmin(){
    return !!localStorage.getItem('role');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
