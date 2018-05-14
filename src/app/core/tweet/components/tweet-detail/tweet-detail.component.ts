import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TweetService} from '../../services/tweet.service';
import {UserService} from '../../../user/services/user.service';
import {User} from '../../../user/models/user';

@Component({
    selector: 'app-tweet-detail',
    templateUrl: './tweet-detail.component.html',
    styleUrls: ['./tweet-detail.component.scss']
})
export class TweetDetailComponent implements OnInit {

    public tweets;
    public followers;
    public following;
    public user: User;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private tweetService: TweetService,
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {

            this.userService.one(params['tweetId']).subscribe((res) => {
                this.user = res['data'];
            });

            this.userService.allCustom(params['tweetId'], '/tweets').subscribe((res) => {
                this.tweets = res['data'];
            });

            this.userService.allCustom(params['tweetId'], '/following').subscribe((res) => {
                this.following = res['data'];
            });

            this.userService.allCustom(params['tweetId'], '/followers').subscribe((res) => {
                this.followers = res['data'];
            });
        });
    }
}
