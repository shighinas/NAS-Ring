import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide : boolean = true;

  member = {};
  checkResponse: boolean = false;
  constructor(private _formBuilder: FormBuilder, private userservice: UserService) { }

  firstFormGroup= this._formBuilder.group({
    HNo: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    Howner : ['', Validators.required],
    Hstreet : ['', Validators.required]
  });
  secondFormGroup= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    PnNo : new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    NoMembers : new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    Password : new FormControl('', Validators.required),
    // confPass : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  check(){

    console.log(this.firstFormGroup.value);
    this.userservice.checkApproval(this.firstFormGroup.value)
    .subscribe((res)=>{
      console.log('subscribed');
      console.log(res);
    }, (err)=>{
      if(err.error == "Wait"){
        this.checkResponse = false;
      }
      else{
        // this.member = {...this.firstFormGroup.value};
        this.checkResponse = true;
      }
      console.log(err.error);
      console.log(this.checkResponse);
    });
  }

  register(){
    this.member = {...this.firstFormGroup.value, ...this.secondFormGroup.value}
    console.log(this.member);
    this.userservice.register(this.member)
    .subscribe((res)=>{
      console.log("Subscribed register", res);
    });
  }

}
