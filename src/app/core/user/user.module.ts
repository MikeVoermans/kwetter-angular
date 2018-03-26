import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {UserService} from './services/user.service';
import {SharedModule} from '../../components/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [UserListComponent, UserDetailComponent],
    providers: [UserService]
})
export class UserModule {
}
