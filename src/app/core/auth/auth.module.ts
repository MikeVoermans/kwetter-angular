import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutsModule} from '../../components/common/layouts/layouts.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent, RegisterComponent],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {
}
