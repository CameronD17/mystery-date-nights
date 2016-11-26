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
var star_component_1 = require('../star-rating/star.component');
var cost_component_1 = require('../cost-rating/cost.component');
var DateNightListComponent = (function () {
    function DateNightListComponent(_dateNightService) {
        this._dateNightService = _dateNightService;
        this.pageTitle = 'Date Night List';
        this.favouriteFilter = false;
        this.column = 'visitDate';
        this.descending = true;
    }
    DateNightListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dateNightService.getDateNights()
            .subscribe(function (dateNights) { return _this.dateNights = dateNights; }, function (error) { return _this.errorMessage = error; });
    };
    DateNightListComponent.prototype.changeSorting = function (columnName) {
        if (this.column == columnName) {
            this.descending = !this.descending;
        }
        else {
            this.column = columnName;
            this.descending = false;
        }
    };
    DateNightListComponent.prototype.convertSorting = function () {
        if (this.descending) {
            return '!' + this.column;
        }
        else {
            return this.column;
        }
    };
    DateNightListComponent.prototype.iconClick = function (columnName) {
        if (columnName == 'dogFriendly') {
            console.log("Dog friendly");
            this.icon = 'dogFriendly';
        }
        else {
            return this.column;
        }
    };
    DateNightListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/date-night-list/date-night-list.component.html',
            styleUrls: ['app/date-night-list/date-night-list.component.css'],
            providers: [star_component_1.StarComponent, cost_component_1.CostComponent]
        }), 
        __metadata('design:paramtypes', [date_night_service_1.DateNightService])
    ], DateNightListComponent);
    return DateNightListComponent;
}());
exports.DateNightListComponent = DateNightListComponent;
//# sourceMappingURL=date-night-list.component.js.map