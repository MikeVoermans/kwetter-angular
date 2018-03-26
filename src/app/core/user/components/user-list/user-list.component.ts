import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    public users;

    constructor(private router: Router,
                private userService: UserService) {

        // this.userService.all().subscribe((res) => {
        //     this.users = res['data'];
        // });
    }

    select(event) {
        // console.log(event);
        // return this.router.navigate(['/users/' + event.selected[0].id]);
    }
}
