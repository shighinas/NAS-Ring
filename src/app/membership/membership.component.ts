import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AddResidentsComponent } from '../add-residents/add-residents.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  constructor(private adminservice: AdminService, private dialog: MatDialog, private snackbar: MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  resd = [];
  reqResd = [];
  appvdResd = [];
  ngOnInit(): void {
    this.adminservice.getReqResd()
    .subscribe( (data)=>{
      this.reqResd = JSON.parse(JSON.stringify(data));
      console.log(this.reqResd);
    });

    this.adminservice.getAppvdResd()
    .subscribe( (data)=>{
      this.appvdResd = JSON.parse(JSON.stringify(data));
      console.log(this.appvdResd);
    });

    this.adminservice.getResidents()
    .subscribe( data=>{
      this.resd = JSON.parse(JSON.stringify(data));
      console.log(this.resd);
    })
  }

  displayedColumns: string[] = ['HouseNo', 'Owner', 'Street', 'accept', 'decline'];
  appvdColumns: string[] = ['HouseNo', 'Owner', 'Street', 'edit', 'delete'];
  resdColumns: string[] = ['HouseNo','Owner','Street','NoMembers']

  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(AddResidentsComponent)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
  }

  onAccept(row: object){
    console.log("accepted",row);
    this.adminservice.acceptRequest(row).subscribe((res)=>{
      console.log(res);
    });
    this.success("Accepted a resident request");
    this.ngOnInit()
  }
  onReject(id:any){
    this.adminservice.rejectRequest(id)
    .subscribe(data=>{
      console.log(data);
    });
    this.success("Rejected the request");
    this.ngOnInit()
  }

  editApprvdResd(row : object){
    console.log(row);
    this.adminservice.populateForm(row)
    this.onCreate();
    this.ngOnInit();
  }

  onDel(id : any){
    console.log("deleting", id);
    this.adminservice.delappvd(id)
    .subscribe((res)=>{
      console.log(res);
    });
    this.success("Successfully deleted from approved user list");
    this.ngOnInit();
  }

  success(msg: string){
    this.snackbar.open(msg, '', this.config);
  }


}
