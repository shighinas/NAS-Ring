import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { NotifFormComponent } from '../notif-form/notif-form.component';
import { NotifModel } from './notif.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class NotificationComponent implements OnInit {
  panelOpenState = false;
  notification: NotifModel[] = [];
  format: string = 'dd/MM/yyyy hh:mm';
  constructor(private adminservice: AdminService, private dialog: MatDialog, public _auth:AuthService) { }

  ngOnInit(): void {
    this.adminservice.getNotif()
    .subscribe((res)=>{
      this.notification = JSON.parse(JSON.stringify(res));
      this.notification.reverse();
      console.log(this.notification);
    })
  }

  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(NotifFormComponent)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
  }
}
