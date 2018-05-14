import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.checkLogin();

    }

    /**
     * Checks if the user is actually authenticated
     *
     * @returns {any}
     */
    checkLogin(): (Observable<boolean> | boolean) {

        // return true;

        // If we already authenticated don't do it again,
        // You can comment the next 3 lines to fetch data from DS on every page navigation
        if (this.authService.isAuthenticated) {
            return true;
        }

        // let user = localStorage.getItem('currentUser');
        // if (user) {
        //
        //     user = JSON.parse(user);
        //
        //     // When we have found a user in the cache we will have to re-login on the Pepper API,
        //     // When logged in, retry to do stuff with the API
        //     this.authService.login(<User>user);
        //
        //     return true;
        //
        // }

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }

}
