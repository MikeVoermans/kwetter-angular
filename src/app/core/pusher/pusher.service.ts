import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {User} from '../user/models/user';

declare const Pusher: any;

@Injectable()
export class PusherService {
    pusher: any;
    channel: any;
    public loggedInUser: User;

    constructor() {
        this.pusher = new Pusher(environment.pusher.key, {
            cluster: environment.pusher.cluster,
            encrypted: true
        });
        this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('subscribed to ' + this.loggedInUser.email);
        this.channel = this.pusher.subscribe(this.loggedInUser.email);
    }
}
