import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _auth:AuthService, private router:Router){}
  canActivate(): boolean {
    if( this._auth.loggedIn && this._auth.isAdmin()){
      return true
    }
    else{
      this.router.navigate(["/"]);
      return false;
    }
  }

}
