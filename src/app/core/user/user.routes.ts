import {Routes} from '@angular/router';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import {AuthGuard} from '../auth/auth-guard.service';

export const userRoutes: Routes = [
    // {canActivate: [AuthGuard], path: 'create', component: UserFormComponent},
    {canActivate: [AuthGuard], path: '', component: UserListComponent},
    {canActivate: [AuthGuard], path: ':userId', component: UserDetailComponent},
    // {canActivate: [AuthGuard], path: 'edit/:userId', component: UserFormComponent},
];
