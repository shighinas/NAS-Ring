import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-residents',
  templateUrl: './add-residents.component.html',
  styleUrls: ['./add-residents.component.css']
})
export class AddResidentsComponent implements OnInit {
  // newResident = {hNo:0, Street:"", owner:""};
  constructor(private adminservice : AdminService, private snackbar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  newResident = this.adminservice.newResident;
  ngOnInit(): void {

  }



  addnewResident(){
    console.log(this.adminservice.newResident.value);
    this.adminservice.addResd(this.adminservice.newResident.value)
    .subscribe( (res)=>{
      console.log("Subscribed!!");
      this.success("New resident Added");
    }, (err)=>{
      console.log(err.error);
    });
  }

  success(msg: string){
    this.snackbar.open(msg, '', this.config);
  }

}
