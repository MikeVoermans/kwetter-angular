import {User} from '../../user/models/user';

export class Tweet {
    id: number;
    user: User;
    user_id: number;
    message: string;
    created: string;

    public fields = ['message'];

    constructor() {
    }
}
