import {Routes} from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';

export const userRoutes: Routes = [
    // {canActivate: [AuthGuard], path: 'create', component: UserFormComponent},
    {path: '', component: UserListComponent},
    {path: ':userId', component: UserDetailComponent},
    // {canActivate: [AuthGuard], path: 'edit/:userId', component: UserFormComponent},
];
