import {detectBody} from '../../../app.helpers';

declare var jQuery: any;

export class TopNavigationLayoutComponent {

    public ngOnInit(): any {
        detectBody();
    }

    public onResize() {
        detectBody();
    }

}
