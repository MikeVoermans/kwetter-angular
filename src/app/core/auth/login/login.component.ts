import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    userEmails = ['philipsen.rens@gmail.com', 'maartenpeels@gmail.com'];

    @Input()
    username = this.userEmails[Math.floor(Math.random() * this.userEmails.length)];


    @Input()
    password = '12345';

    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Login
     */
    login(): void {
        // Temp: to skip the Login
        this.router.navigate(['/users']);

        this.authService.login(this.username, this.password).subscribe(() => {

            if (this.authService.isAuthenticated) {

                // Redirect the user
                this.router.navigate(['/users']);
            }
        });
    }

    /**
     * Gets the current year (used in footer)
     *
     * @returns {number}
     */
    public date(): number {

        return new Date().getFullYear();

    }

}
