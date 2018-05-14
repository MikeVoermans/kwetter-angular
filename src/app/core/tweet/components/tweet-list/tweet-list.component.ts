import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TweetService} from '../../services/tweet.service';
import {UserService} from '../../../user/services/user.service';
import {User} from '../../../user/models/user';
import {PusherService} from '../../../pusher/pusher.service';
import {Tweet} from '../../models/tweet';

@Component(<Component>{
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

    public tweets;
    public followers;
    public following;
    public loggedInUser: User;
    public tweet: Tweet;

    constructor(private router: Router,
                private tweetService: TweetService,
                private userService: UserService,
                private pusherService: PusherService) {
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(): void {

        console.log('Channel is ');

        this.pusherService.channel.bind('newEvent', data => {
            console.log(data);
            console.log(data['message']);
            this.tweet = new Tweet();
            this.tweet.message = data['message'];
            this.tweet.created = data['created'];
            this.userService.one(data['user_id']).subscribe((res) => {
                console.log(res);
                this.tweet.user = res['data'];
                this.tweets.unshift(this.tweet);
            });
        });

        this.loadTweets();

        this.userService.allCustom(this.loggedInUser.id, '/following').subscribe((res) => {
            this.following = res['data'];
        });

        this.userService.allCustom(this.loggedInUser.id, '/followers').subscribe((res) => {
            this.followers = res['data'];
        });
    }

    loadTweets() {
        this.tweetService.allCustom(this.loggedInUser.id, '/user').subscribe((res) => {
            this.tweets = res['data'];
        });
    }


}
