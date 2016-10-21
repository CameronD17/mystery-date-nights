import { Component } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { IDateNight } from '../date-night/date-night';
import { DateNightService } from '../date-night/date-night.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'map',
    templateUrl: 'app/date-night-map/date-night-map.component.html',
    styleUrls: ['app/date-night-map/date-night-map.component.css'], 
    providers: [DateNightService]
})

export class DateNightMapComponent {
    pageTitle: string = "Date Night Map";    
    dateNights: IDateNight[];
    private _dateNightData = 'data/date-nights.json';
    errorMessage: string;
    map: any;

    constructor(private _dateNightService: DateNightService) {}

    ngOnInit(): void {
        this.map = L.map('map',{scrollWheelZoom:false}).setView([55.94, -3.21], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        
        this._dateNightService.getDateNights()
            .subscribe(
                dateNights => {
                    this.dateNights = dateNights;
                    this.addMarkers(dateNights);
                },
                error => this.errorMessage = <any>error);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    addMarkers(data: any) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].onMap) {
                let marker = L.marker([data[i].latitude,data[i].longitude]).addTo(this.map);
                marker.bindPopup("<a href='/date/"+data[i].slug+"'>"+data[i].locationName+"</a>");
            }
        }    
    }
}