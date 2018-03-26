import {Routes} from '@angular/router';
import {TweetListComponent} from './components/tweet-list/tweet-list.component';
import {TweetDetailComponent} from './components/tweet-detail/tweet-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';

export const tweetRoutes: Routes = [
    // {canActivate: [AuthGuard], path: 'create', component: TweetFormComponent},
    {canActivate: [AuthGuard], path: '', component: TweetListComponent},
    {canActivate: [AuthGuard], path: ':tweetId', component: TweetDetailComponent},
    // {canActivate: [AuthGuard], path: 'edit/:tweetId', component: TweetFormComponent},
];
