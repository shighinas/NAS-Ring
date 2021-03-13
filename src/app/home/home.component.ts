import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { ComplaintModel} from './complaint.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  complaints : ComplaintModel[] = [];
  format: string = 'dd/MM/yyyy hh:mm';
  mediaSub: Subscription = new Subscription();
  deviceXs: boolean = false;
  constructor(public mediaObserver: MediaObserver, private _user:UserService) { }

  message= {
    msg : '',
    author : localStorage.getItem('name')
  };

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    });
    this.message.msg = '';
    this._user.listComplaint()
    .subscribe((res)=>{
      this.complaints = JSON.parse(JSON.stringify(res));
      this.complaints.reverse();
      console.log(this.complaints);
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  send(){
    console.log(this.message);
    this._user.postComplaint(this.message)
    .subscribe( (res)=>{
      console.log(res);
    })
    this.ngOnInit();
  }
}
