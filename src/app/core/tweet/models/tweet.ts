import { User } from '../../user/models/user';

export class Tweet {
    id: number;
    user: User;
    message: string;
    created: string;

    constructor() {
    }
}
