import { Component, OnInit, Input } from '@angular/core';

import { IDateNight } from '../date-night/date-night';
import { DateNightService } from '../date-night/date-night.service';
import { StarComponent } from '../star-rating/star.component';

@Component({
    templateUrl: 'app/date-night-list/date-night-list.component.html',
    styleUrls: ['app/date-night-list/date-night-list.component.css'],
    providers: [DateNightService, StarComponent]
})

export class DateNightListComponent implements OnInit {
    pageTitle: string = 'Date Night List';
    listFilter: string;
    dateNights: IDateNight[];
    errorMessage: string;

    constructor(private _dateNightService: DateNightService) {}
    column: string = 'visitDate';
    descending: boolean = true;

    ngOnInit(): void {
        this._dateNightService.getDateNights()
            .subscribe(
                dateNights => this.dateNights = dateNights,
                error => this.errorMessage = <any>error);
    }
    
    changeSorting(columnName): void {        
        if (this.column == columnName) {
            this.descending = !this.descending;
        } else {
            this.column = columnName;
            this.descending = false;
        }
    }
    
    convertSorting(): string {
        if (this.descending) {
            return '!' + this.column;
        } else {
            return this.column;
        }
    }
}