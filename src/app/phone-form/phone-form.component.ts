import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  contactData = new FormGroup({
    name : new FormControl(),
    Designation : new FormControl(),
    phNo: new FormControl('', [Validators.pattern(/^\d{10}$/), Validators.required]),
    email: new FormControl('', Validators.email)
  });
  constructor(private snackbar:MatSnackBar, private _admin:AdminService) { }
  item = {};
  toppings: string = '';
  groupList: string[] = ['Executive Committee', 'Emergency', 'Residents'];
  ngOnInit(): void {
  }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  addEvent(){
    this.item = {...this.contactData.value, group:this.toppings}
    console.log(this.item)
    this._admin.addContact(this.item)
    .subscribe( res =>{
      console.log("Subscribed!!");
      this.success("New contact Added");
    })
  }

  success(msg: string){
    this.snackbar.open(msg, '', this.config);
  }
}
