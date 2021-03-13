import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs : boolean = false;
  constructor(public _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    console.log("logging out")
    localStorage.removeItem('token');
    if(this._auth.isAdmin()){
      localStorage.removeItem('role');
    }
    this.router.navigate(['']);
  }

}
