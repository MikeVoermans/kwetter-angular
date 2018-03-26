import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TweetService} from '../../services/tweet.service';
import {UserService} from '../../../user/services/user.service';

@Component({
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent {

    public tweets;
    public followers;
    public following;

    constructor(private router: Router,
                private tweetService: TweetService,
                private userService: UserService) {
        this.tweetService.allCustom(1, '/user').subscribe((res) => {
            this.tweets = res['data'];
        });

        this.userService.allCustom(1, '/following').subscribe((res) => {
            this.following = res['data'];
        });

        this.userService.allCustom(1, '/followers').subscribe((res) => {
            this.followers = res['data'];
        });
    }

}
