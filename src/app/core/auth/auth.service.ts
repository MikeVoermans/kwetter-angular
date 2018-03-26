import {Injectable} from '@angular/core';
import {User} from '../user/models/user';

@Injectable()
export class AuthService {

    public user: User = new User();

    public isAuthenticated = true;

    constructor() {
    }

    /**
     * Tries to login at DS
     *
     * @param username
     * @param password
     * @returns {any}
     */
    login(username: string, password: string) {

        // TODO: Login logic here
        return null;

    }

    /**
     * Reset everything, logout
     */
    logout(): void {

        localStorage.removeItem('user');
        this.resetCurrentUser();

    }

    /**
     * Resets the current user
     */
    private resetCurrentUser(): void {

        this.user = new User();
        this.isAuthenticated = false;

    }
}
