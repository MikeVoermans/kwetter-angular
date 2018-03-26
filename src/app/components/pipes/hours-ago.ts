import {Pipe, PipeTransform,} from '@angular/core';

@Pipe({name: 'hoursAgo'})
export class HoursAgo implements PipeTransform {

    transform(value: string): any {

        if (!value) {
            return '';
        }
        const dateValue = new Date(value.substr(0, 19));

        const s = Math.floor((new Date().getTime() - new Date(dateValue).getTime()) / 1000);

        let d, h, m, y;

        m = Math.floor(s / 60);
        h = Math.floor(m / 60);
        d = Math.floor(h / 24);
        y = Math.floor(d / 365);

        if (s < 60) {
            return this.formatDate(s, 'second');
        }
        if (m < 60) {
            return this.formatDate(m, 'minute');
        }
        if (h < 24) {
            return this.formatDate(h, 'hour');
        }
        if (d < 365) {
            return this.formatDate(d, 'day');
        } else {
            return this.formatDate(y, 'year');
        }
    }

    private formatDate(value: number, name: string) {
        let dateSingular = 's';
        if (value === 1) {
            dateSingular = '';
        }
        return value + ' ' + name + dateSingular + ' ago';
    }
}
