import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-notif-form',
  templateUrl: './notif-form.component.html',
  styleUrls: ['./notif-form.component.css']
})
export class NotifFormComponent implements OnInit {
  message = new FormGroup({
    Heading : new FormControl(''),
    Description : new FormControl('')
  });

  constructor(private adminservice:AdminService, private snackbar:MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  ngOnInit(): void {
  }

  addNotif(){
    console.log(this.message.value)
      this.adminservice.addNotif(this.message.value)
      .subscribe( (res)=>{
        console.log(res);
        this.success("New Notification Added");
      })
    }

    success(msg: string){
      this.snackbar.open(msg, '', this.config);
    }

}
