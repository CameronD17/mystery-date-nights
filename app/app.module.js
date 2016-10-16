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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var date_night_list_component_1 = require('./date-night-list/date-night-list.component');
var date_night_filter_pipe_1 = require('./date-night-list/date-night-filter.pipe');
var date_night_date_filter_pipe_1 = require('./date-night-list/date-night-date-filter.pipe');
var date_night_detail_component_1 = require('./date-night-detail/date-night-detail.component');
var date_night_map_component_1 = require('./date-night-map/date-night-map.component');
var star_component_1 = require('./star-rating/star.component');
var cost_component_1 = require('./cost-rating/cost.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                date_night_list_component_1.DateNightListComponent,
                date_night_filter_pipe_1.DateNightFilterPipe,
                date_night_date_filter_pipe_1.DateNightOrderPipe,
                date_night_detail_component_1.DateNightDetailComponent,
                date_night_map_component_1.DateNightMapComponent,
                star_component_1.StarComponent,
                cost_component_1.CostComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map