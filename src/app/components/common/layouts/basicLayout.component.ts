import {Component} from '@angular/core';
import {detectBody} from '../../../app.helpers';

declare var jQuery: any;

@Component({
    selector: 'app-basic',
    templateUrl: 'basicLayout.template.html',
})
export class BasicLayoutComponent {

    public ngOnInit(): any {
        detectBody();
    }

    public onResize() {
        detectBody();
    }

}
