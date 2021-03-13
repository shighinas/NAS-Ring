import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  newResident = new FormGroup(
    {
      _id : new FormControl(''),
      HouseNo : new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      Street : new FormControl(''),
      Owner : new FormControl('')
    }
  )

  constructor(private http: HttpClient) { }

  populateForm(data: object){
    this.newResident.setValue(_.omit(data, '__v'));
  }

  addResd(item:object){
    console.log("from service:", item);
    return this.http.post('http://localhost:4000/appvresd', item);
  }

  delappvd(id: string){
    return this.http.get('http://localhost:4000/delappvd/'+id);
  }

  getReqResd(){
    return this.http.get('http://localhost:4000/requestedResd');
  }

  getAppvdResd(){
    return this.http.get('http://localhost:4000/getAppvdResd');
  }

  acceptRequest(item: object){
    console.log("admin service accepted", item)
    return this.http.post('http://localhost:4000/acceptReq', item);
  }
  rejectRequest(id:string){
    console.log("rejecting", id);
    return this.http.get('http://localhost:4000/rejectRequest/'+id);
  }

  // https://resdbackendapp.herokuapp.com
  // *******************************************************************************************************************************

  addNotif(item: object){
    return this.http.post('http://localhost:4000/addnotif', item)
  }

  getNotif(){
    return this.http.get('http://localhost:4000/notif')
  }

  addEvent(item: object){
    return this.http.post('http://localhost:4000/addevent', item)
  }
  listEvent(){
    return this.http.get('http://localhost:4000/listEvents')
  }

  addContact(item:object){
    return this.http.post('http://localhost:4000/addContact', item);
  }
  listContacts(){
    return this.http.get('http://localhost:4000/listContacts');
  }
  getResidents(){
    return this.http.get('http://localhost:4000/getResidents');
  }
}
