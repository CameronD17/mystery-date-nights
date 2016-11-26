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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var DateNightService = (function () {
    function DateNightService(_http) {
        this._http = _http;
        this._dateNightData = 'app/date-night/date-nights.json';
    }
    DateNightService.prototype.getDateNights = function () {
        var _this = this;
        if (this.cached) {
            return Rx_1.Observable.of(this.cached);
        }
        else {
            return this._http.get(this._dateNightData)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.cached = data;
            })
                .catch(this.handleError);
        }
    };
    DateNightService.prototype.getDateNight = function (slug) {
        return this.getDateNights()
            .map(function (dates) { return dates.find(function (p) { return p.slug === slug; }); });
    };
    DateNightService.prototype.getDateNightById = function (id) {
        return this.getDateNights()
            .map(function (dates) { return dates.find(function (p) { return p.dateNightId === id; }); });
    };
    DateNightService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    DateNightService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DateNightService);
    return DateNightService;
}());
exports.DateNightService = DateNightService;
//# sourceMappingURL=date-night.service.js.map