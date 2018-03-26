import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TweetService } from '../../services/tweet.service';

@Component({
    selector: 'app-tweet-detail',
    templateUrl: './tweet-detail.component.html',
    styleUrls: ['./tweet-detail.component.scss']
})
export class TweetDetailComponent implements OnInit {

    public tweet;

    constructor(private route: ActivatedRoute,
                private tweetService: TweetService) {
    }

    ngOnInit() {

        // this.route.params.subscribe((params: Params) => {
        //     this.tweetService.one(params['tweetId']).subscribe((res) => {
        //         this.tweet = res['data'];
        //     });
        // });

    }

}
