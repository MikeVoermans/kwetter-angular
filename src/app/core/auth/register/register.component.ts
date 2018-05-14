import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    public formGroup: FormGroup;
    public fields;

    @Input()
    email = '';

    @Input()
    username = '';

    @Input()
    password = '';

    @Input()
    password_repeat = '';

    constructor(private authService: AuthService,
                private router: Router,
                private fb: FormBuilder) {
        this.fields = ['email', 'username', 'password', 'password_repeat'];
        this.createForm();
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

    /**
     * Create form
     */
    private createForm() {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = new FormControl();
        });
        this.formGroup = this.fb.group(obj);
    }

}
