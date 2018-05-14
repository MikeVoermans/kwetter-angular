import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'hoursAgo'})
export class HoursAgo implements PipeTransform {

    static formatDate(value: number, name: string) {
        let dateSingular = 's';
        if (value === 1) {
            dateSingular = '';
        }
        return value + ' ' + name + dateSingular + ' ago';
    }

    transform(value: string): any {

        if (!value) {
            return '';
        }
        const s = Math.floor((new Date().getTime() - new Date(value).getTime()) / 1000);

        let d, h, m, y;

        m = Math.floor(s / 60);
        h = Math.floor(m / 60);
        d = Math.floor(h / 24);
        y = Math.floor(d / 365);

        if (s < 60) {
            return HoursAgo.formatDate(s, 'second');
        }
        if (m < 60) {
            return HoursAgo.formatDate(m, 'minute');
        }
        if (h < 24) {
            return HoursAgo.formatDate(h, 'hour');
        }
        if (d < 365) {
            return HoursAgo.formatDate(d, 'day');
        } else {
            return HoursAgo.formatDate(y, 'year');
        }
    }


}
