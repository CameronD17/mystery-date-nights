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
var router_1 = require('@angular/router');
var date_night_service_1 = require('../date-night/date-night.service');
var star_component_1 = require('../star-rating/star.component');
var cost_component_1 = require('../cost-rating/cost.component');
var DateNightDetailComponent = (function () {
    function DateNightDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.pageTitle = 'Date Night Detail';
    }
    DateNightDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var slug = params['slug'];
            _this.pageTitle += ": " + slug;
            _this.getDateNight(slug);
        });
    };
    DateNightDetailComponent.prototype.getDateNight = function (slug) {
        var _this = this;
        this.service.getDateNight(slug).subscribe(function (date) { return _this.dateNight = date; }, function (error) { return _this.errorMessage = error; });
        //this.getPrevDateNight(this.dateNight.dateNightId - 1); 
    };
    DateNightDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/date-night-detail/date-night-detail.component.html',
            providers: [star_component_1.StarComponent, cost_component_1.CostComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, date_night_service_1.DateNightService])
    ], DateNightDetailComponent);
    return DateNightDetailComponent;
}());
exports.DateNightDetailComponent = DateNightDetailComponent;
//# sourceMappingURL=date-night-detail.component.js.map