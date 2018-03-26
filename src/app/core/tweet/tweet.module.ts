import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TweetListComponent} from './components/tweet-list/tweet-list.component';
import {TweetDetailComponent} from './components/tweet-detail/tweet-detail.component';
import {TweetService} from './services/tweet.service';
import {SharedModule} from '../../components/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [TweetListComponent, TweetDetailComponent],
    providers: [TweetService]
})
export class TweetModule {
}
