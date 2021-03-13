import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddEventComponent } from '../add-event/add-event.component';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { EventModel} from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  showFiller = false;

  mediaSub: Subscription = new Subscription();
  deviceXs: boolean = false;
  events : EventModel[] = [];
  constructor(private dialog:MatDialog, public mediaObserver:MediaObserver, public _admin:AdminService, public _auth:AuthService) { }

  format: string = 'dd/MM/yyyy hh:mm';
  for : string = 'dd/MM/yyyy';
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    });
    this._admin.listEvent()
    .subscribe( res=>{
      this.events = JSON.parse(JSON.stringify(res));
      this.events.reverse();
      console.log(this.events);
    })
  }

  topVal = 0;
  onScroll(e:any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }

  onCreate(){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    this.dialog.open(AddEventComponent)
    .afterClosed()
    .subscribe(() => this.ngOnInit());
  }
}
