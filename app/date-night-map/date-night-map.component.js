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
require('leaflet');
var DateNightMapComponent = (function () {
    function DateNightMapComponent() {
        this.pageTitle = "Date night map";
    }
    DateNightMapComponent.prototype.ngAfterViewInit = function () {
        this.leafletMap = L.map("map").setView([-3.1976, 55.9527], 12);
    };
    DateNightMapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/date-night-map/date-night-map.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DateNightMapComponent);
    return DateNightMapComponent;
}());
exports.DateNightMapComponent = DateNightMapComponent;
//# sourceMappingURL=date-night-map.component.js.map