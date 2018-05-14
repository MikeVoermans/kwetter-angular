import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent} from './components/common/layouts/basicLayout.component';
import {AuthGuard} from './core/auth/auth-guard.service';
import {RegisterComponent} from './core/auth/register/register.component';
import {LoginComponent} from './core/auth/login/login.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: BasicLayoutComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
