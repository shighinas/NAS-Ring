import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { PhoneFormComponent } from '../phone-form/phone-form.component';
import { ContactModel } from './contact.model';
import { ResdMemModel } from './resdMem.model';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent implements OnInit {
  panelOpenState = false;

  constructor(private dialog: MatDialog, private _admin:AdminService, public _auth:AuthService) { }
  contact : ContactModel[] = []
  residents: ResdMemModel[] = []
  ngOnInit(): void {
    this._admin.listContacts()
    .subscribe(res=>{
      this.contact = JSON.parse(JSON.stringify(res));
      console.log(this.contact);
    })
    this._admin.getResidents()
    .subscribe(res=>{
      console.log('resident', res);
      this.residents = JSON.parse(JSON.stringify(res));
    })
  }
  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(PhoneFormComponent)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
  }
}


