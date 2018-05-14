import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public users: User[];
    public loggedInUser: User;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserService) {

        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers() {
        this.userService.allCustom(this.loggedInUser.id, '/isFollowing').subscribe((res) => {
            this.users = res['data'];
        });
    }

    follow(user: User) {
        this.userService.createCustom(null, '/' + this.loggedInUser.id + '/follow/' + user.id + '/true').subscribe(() => {
            this.loadUsers();
        });
    }

    unFollow(user: User) {
        this.userService.createCustom(null, '/' + this.loggedInUser.id + '/follow/' + user.id + '/false').subscribe(() => {
            this.loadUsers();
        });
    }
}
