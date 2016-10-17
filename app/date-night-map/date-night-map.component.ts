import { Component } from '@angular/core';
import 'leaflet';

@Component({
    selector: 'map',
    templateUrl: 'app/date-night-map/date-night-map.component.html' 
})
export class DateNightMapComponent {
    pageTitle: string = "Date night map";
    leafletMap: any;
    ngAfterViewInit() {
        this.leafletMap = L.map("map").setView([-3.1976, 55.9527], 12);
    }
}