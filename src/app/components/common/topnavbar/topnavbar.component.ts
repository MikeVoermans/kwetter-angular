import {Component, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TweetService} from '../../../core/tweet/services/tweet.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Tweet} from '../../../core/tweet/models/tweet';
import {AuthService} from '../../../core/auth/auth.service';
import {PusherService} from '../../../core/pusher/pusher.service';
import {User} from '../../../core/user/models/user';

declare var jQuery: any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html',
})
export class TopNavbarComponent {


    public modalRef: BsModalRef;
    public formGroup: FormGroup;
    public tweet: Tweet;
    public fields;
    public loggedInUser: User;

    constructor(private fb: FormBuilder,
                private tweetService: TweetService,
                private modalService: BsModalService,
                private authService: AuthService,
                private pusherService: PusherService) {
        this.tweet = new Tweet();
        this.fields = this.tweet.fields;
        this.createForm();
    }


    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    /**
     * Submit form
     */
    submit() {
        this.tweet = this.prepareSavePayWeight();
        this.tweetService.createCustom(this.tweet, '/create').subscribe(() => {
            this.modalRef.hide();
            // TODO: Change to reload body of page only: event-emitters


            // window.location.reload();
        });
    }

    /**
     * Create form
     */
    private createForm() {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = new FormControl();
        });
        this.formGroup = this.fb.group(obj);
    }

    /**
     * Prepare save form
     * @returns {Tweet}
     */
    private prepareSavePayWeight(): Tweet {
        const obj = {};
        this.fields.forEach((field) => {
            obj[field] = this.formGroup.value[field] as number;
        });
        return <Tweet>obj;
    }
}
