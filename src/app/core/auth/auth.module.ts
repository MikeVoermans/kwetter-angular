import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [LoginComponent, RegisterComponent],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class AuthModule {
}
