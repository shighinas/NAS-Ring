import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  newEvent = new FormGroup({
    name : new FormControl('', Validators.required),
    status : new FormControl(),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imgURL: new FormControl('')
  })
  item = {}
  constructor(private _admin:AdminService, private snackbar:MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  ngOnInit(): void {
  }
  toppings: string = '';
  statusList: string[] = ['upcoming', 'planning', 'Active', 'pending', 'completed'];

  addEvent(){
    this.item = {...this.newEvent.value, status:this.toppings}
    console.log(this.item);
    this._admin.addEvent(this.item)
    .subscribe( res =>{
      console.log("Subscribed!!");
      this.success("New event Added");
    })
  }

  success(msg: string){
    this.snackbar.open(msg, '', this.config);
  }

}
