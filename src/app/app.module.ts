import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
// App modules/components
import {CoreModule} from './core/core.module';
import {AuthModule} from './core/auth/auth.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        AppRoutingModule,
        HttpModule,
        AuthModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
