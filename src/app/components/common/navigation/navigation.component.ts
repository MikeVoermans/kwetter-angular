import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'jquery-slimscroll';
import {UserService} from '../../../core/user/services/user.service';
import {User} from '../../../core/user/models/user';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent {
    private user: User;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserService) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
