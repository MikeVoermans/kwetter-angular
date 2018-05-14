import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlPipe} from '../pipes/safe-html';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UtcDatePipe} from '../pipes/utc-date';
import {HoursAgo} from '../pipes/hours-ago';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SafeHtmlPipe,
        UtcDatePipe,
        HoursAgo
    ],
    exports: [
        SafeHtmlPipe,
        UtcDatePipe,
        HoursAgo,
        FormsModule,
        HttpClientModule
    ]
})
export class SharedModule {
}
