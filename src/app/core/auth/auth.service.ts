import {Injectable} from '@angular/core';
import {User} from '../user/models/user';
import {ResourceService} from '../../components/services/resource.service';

@Injectable()
export class AuthService extends ResourceService {

    public user: User = new User();

    public isAuthenticated = false;

    public endpoint = 'authentication';

    /**
     * Tries to login at DS
     *
     * @returns {any}
     * @param user
     */
    login(user: User) {
        this.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }


    /**
     * Reset everything, logout
     */
    logout(): void {

        localStorage.removeItem('currentUser');
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
