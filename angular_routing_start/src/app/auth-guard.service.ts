import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

     constructor(private authservice : AuthService, private router : Router) {}
     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return  this.authservice.isAuthenticated().then((authentication:boolean) =>{
         if(authentication) {
           return true
         }else {
           this.router.navigate(['/'])
         }
       })
     }

     canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.canActivate(route,state)
     }
}
