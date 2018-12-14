import { AuthenService } from './../services/authen.service';
import { SystemeConstants } from './../common/systeme.constants';
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { urlConstants } from '../common/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {
    // constructor(private router: Router) {

    // }
    
    // canActivate(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    //     if (localStorage.getItem(SystemeConstants.CURRENT_USER)) {
    //         return true;
    //     }
    //     else {
    //         this.router.navigate([urlConstants.LOGIN], {
    //             queryParams: {
    //                 returnurl: routerState.url
    //             }
    //         });
    //     }
    // }
    constructor(private router: Router, private authService: AuthenService) {

    }
    canActivate(){
        if(!this.authService.isTokenExpired()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}


