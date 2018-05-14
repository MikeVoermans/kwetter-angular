import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Tweet} from '../../../tweet/models/tweet';
import {User} from '../../models/user';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

    public loggedInUser: User;
    public user: User;
    public formGroup: FormGroup;
    public fields;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        this.user = new User();
        this.fields = this.user.fields;
        this.createForm();
        this.setFormValue();
    }

    /**
     * Submit form
     */
    submit() {
        this.loggedInUser = this.prepareSavePayWeight();
        this.userService.put(this.loggedInUser, '/' + this.loggedInUser.id + '/update').subscribe(() => {
            return this.router.navigate(['/tweets']);
        });
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
     * Set form value
     */
    private setFormValue() {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = this.loggedInUser[field];
        });
        this.formGroup.setValue(obj);
    }

    /**
     * Prepare save form
     * @returns {Tweet}
     */
    private prepareSavePayWeight(): User {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = this.formGroup.value[field];
        });
        return <User>obj;
    }

}
