import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {userRoutes} from './user/user.routes';
import {BasicLayoutComponent} from '../components/common/layouts/basicLayout.component';
import {tweetRoutes} from './tweet/tweet.routes';
import {AuthGuard} from './auth/auth-guard.service';

const coreRoutes: Routes = [
    {path: '', redirectTo: 'tweets', pathMatch: 'full'},
    {
        path: 'users',
        canActivate: [AuthGuard],
        component: BasicLayoutComponent,
        children: userRoutes
    },
    {
        path: 'tweets',
        canActivate: [AuthGuard],
        component: BasicLayoutComponent,
        children: tweetRoutes
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(coreRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule {
}
