import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
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

        this.route.params.subscribe((params: Params) => {
            this.userService.one(1).subscribe((res) => {
                this.user = res['data'];
            });
        });
    }

    // ngAfterViewInit() {
    //     jQuery('#side-menu').metisMenu();
    //
    //     if (jQuery('body').hasClass('fixed-sidebar')) {
    //         jQuery('.sidebar-collapse').slimscroll({
    //             height: '100%'
    //         })
    //     }
    // }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }


}
