export class User {

    public id: number;
    public password: number;
    public email: string;
    public imagePath: string;
    public nameFirst: string;
    public nameLast: string;
    public nameFull: string;
    public nameUser: string;
    public location: string;
    public totalFollowing: number;
    public totalFollowers: number;
    public totalTweets: number;
    public website: string;
    public biography: string;
    public follow: boolean;

    public fields = ['id', 'nameFirst', 'nameLast', 'nameUser', 'email', 'imagePath', 'website', 'biography'];

    constructor() {

    }

}
