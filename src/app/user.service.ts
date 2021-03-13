import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkApproval(item: object){
    return this.http.post('http://localhost:4000/checkappvl', item);
  }

  register(item: object){
    return this.http.post('http://localhost:4000/membership', item);
  }

  postComplaint(item: object){
    console.log(item);
    return this.http.post('http://localhost:4000/postComplaint', item);
  }

  listComplaint(){
    return this.http.get('http://localhost:4000/listComplaints')
  }
}
