import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'utcDate'})
export class UtcDatePipe implements PipeTransform {

    transform(value: string): any {

        if (!value) {
            return '';
        }
        const dateValue = new Date(value.substr(0, 19));

        return new Date(
            dateValue.getUTCFullYear(),
            dateValue.getUTCMonth(),
            dateValue.getUTCDate(),
            dateValue.getUTCHours() + 5,
            dateValue.getUTCMinutes(),
            dateValue.getUTCSeconds()
        );
    }
}
