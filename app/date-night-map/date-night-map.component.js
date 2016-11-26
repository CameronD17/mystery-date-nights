"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var date_night_service_1 = require('../date-night/date-night.service');
var Rx_1 = require('rxjs/Rx');
var DateNightMapComponent = (function () {
    function DateNightMapComponent(_dateNightService) {
        this._dateNightService = _dateNightService;
        this.pageTitle = "Date Night Map";
        this._dateNightData = 'data/date-nights.json';
    }
    DateNightMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = L.map('map', { scrollWheelZoom: false }).setView([55.94, -3.22], 12);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        this._dateNightService.getDateNights()
            .subscribe(function (dateNights) {
            _this.dateNights = dateNights;
            _this.addMarkers(dateNights);
        }, function (error) { return _this.errorMessage = error; });
    };
    DateNightMapComponent.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    DateNightMapComponent.prototype.addMarkers = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].onMap) {
                var marker = L.marker([data[i].latitude, data[i].longitude]).addTo(this.map);
                marker.bindPopup("<a href='/date/" + data[i].slug + "'>" + data[i].locationName + "</a>");
            }
        }
    };
    DateNightMapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/date-night-map/date-night-map.component.html',
            styleUrls: ['app/date-night-map/date-night-map.component.css']
        }), 
        __metadata('design:paramtypes', [date_night_service_1.DateNightService])
    ], DateNightMapComponent);
    return DateNightMapComponent;
}());
exports.DateNightMapComponent = DateNightMapComponent;
//# sourceMappingURL=date-night-map.component.js.map