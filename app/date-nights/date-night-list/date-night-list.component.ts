import { Component, OnInit } from '@angular/core';

import { IDateNight } from '../date-night/date-night';
import { DateNightService } from '../date-night/date-night.service';

@Component({
    templateUrl: 'app/date-nights/date-night-list/date-night-list.component.html',
    styleUrls: ['app/date-nights/date-night-list/date-night-list.component.css'],
    providers: [DateNightService]
})

export class DateNightListComponent implements OnInit {
    pageTitle: string = 'Date Night List';
    listFilter: string;
    dateNights: IDateNight[];
    errorMessage: string;

    constructor(private _dateNightService: DateNightService) {}

    ngOnInit(): void {
        console.log('In OnInit');
        this._dateNightService.getDateNights()
            .subscribe(
                dateNights => this.dateNights = dateNights,
                error => this.errorMessage = <any>error);
    }
}