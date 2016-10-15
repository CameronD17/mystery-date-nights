import { PipeTransform, Pipe } from '@angular/core';
import { IDateNight } from '../date-night/date-night';

@Pipe({
    name: 'dateNightFilter',
    pure: false
})

export class DateNightFilterPipe implements PipeTransform {
    transform(dateNights: IDateNight[], args: string): IDateNight[] {
        if (!dateNights) return null;
        if (!args) return dateNights;
        let filter: string = args.toLocaleLowerCase();
        return filter ? dateNights.filter((date: IDateNight) =>
        date.locationName.toLocaleLowerCase().indexOf(filter) != -1) : dateNights;
    }
}