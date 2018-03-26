import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    @Input()
    email = '';

    @Input()
    username = '';

    @Input()
    password = '';

    @Input()
    password_repeat = '';

    constructor(public authService: AuthService, public router: Router) {
    }

    /**
     * Register
     */
    register(): void {
        // TODO: Implement register
        this.router.navigate(['/login']);
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
