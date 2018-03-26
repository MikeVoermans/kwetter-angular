import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    public user;

    constructor(private route: ActivatedRoute,
                private userService: UserService) {
    }

    ngOnInit() {

        // this.route.params.subscribe((params: Params) => {
        //     this.userService.one(params['userId']).subscribe((res) => {
        //         this.user = res['data'];
        //     });
        // });

    }

}
