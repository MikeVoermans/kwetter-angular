import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Tweet} from '../../tweet/models/tweet';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public formGroup: FormGroup;
    public fields;

    constructor(private authService: AuthService,
                private router: Router,
                private fb: FormBuilder) {
        this.fields = ['username', 'password'];
        this.createForm();
    }

    /**
     * Login
     */
    login(): void {
        // Temp: to skip the Login
        // this.router.navigate(['/users']);
        this.authService.createCustom(this.prepareSavePayWeight(), '').subscribe((res) => {
            if (res['success'] === true) {
                this.authService.login(res['data']);
                this.router.navigate(['/tweets']);
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

    /**
     * Prepare save form
     * @returns {Tweet}
     */
    private prepareSavePayWeight() {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = this.formGroup.value[field] as number;
        });
        return obj;
    }

}
