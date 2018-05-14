import {Component, OnInit} from '@angular/core';
import {detectBody} from '../../../app.helpers';

declare var jQuery: any;

@Component({
    selector: 'app-basic',
    templateUrl: 'basicLayout.template.html',
})
export class BasicLayoutComponent implements OnInit {

    public ngOnInit(): any {
        detectBody();
    }

    public onResize() {
        detectBody();
    }

    getNotification(evt) {
        console.log(evt);
    }
}
