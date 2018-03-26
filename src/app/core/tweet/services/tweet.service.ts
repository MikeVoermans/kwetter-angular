import {Injectable} from '@angular/core';
import {ResourceService} from '../../../components/services/resource.service';

@Injectable()
export class TweetService extends ResourceService {

    /**
     * URI to endpoint
     *
     * @type {string}
     */
    public endpoint = 'tweets';
}
