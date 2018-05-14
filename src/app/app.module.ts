import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
// App modules/components
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {ToasterModule} from 'angular5-toaster/dist';
import {PusherService} from './core/pusher/pusher.service';

@NgModule({
    providers: [PusherService],
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CoreModule,
        AppRoutingModule,
        HttpModule,
        ToasterModule,
        ModalModule.forRoot(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
