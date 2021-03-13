import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()  deviceXs : boolean = false;
  hide : boolean = true;
  constructor(private _auth: AuthService, private router:Router, private snackbar:MatSnackBar) { }
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }
  ngOnInit(): void {
  }

  loginData= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    Password : new FormControl('', Validators.required)
  });

  login(){
    console.log("hello");
    this._auth.loginUser(this.loginData.value)
    .subscribe( (res)=>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('name', res.name);
      if(res.role != ''){
        localStorage.setItem('role', res.role);
        this.success("Welcome Admin")
      }
      else{
        this.success("Successfully Logged In")
      }
      this.router.navigate(['home']);
    }, (err)=>{
      console.log(err);
      this.success("Incorrect Username or Password")
      this.loginData.reset();
    });
  }

  success(msg: string){
    this.snackbar.open(msg, '', this.config);
  }

}
