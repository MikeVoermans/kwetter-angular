import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserModule} from './user/user.module';
import {TweetModule} from './tweet/tweet.module';
import {CoreRoutingModule} from './core-routing.module';
import {LayoutsModule} from '../components/common/layouts/layouts.module';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        LayoutsModule,
        UserModule,
        TweetModule
    ]
})
export class CoreModule {
}
