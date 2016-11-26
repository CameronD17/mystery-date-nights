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
var core_1 = require("@angular/core");
var DateNightIconFilterPipe = (function () {
    function DateNightIconFilterPipe() {
    }
    DateNightIconFilterPipe.prototype.transform = function (dateNights, args) {
        if (!dateNights)
            return null;
        if (!args)
            return dateNights;
        var filter = args.toLocaleLowerCase();
        console.log(filter);
        if (filter == 'dogfriendly') {
            console.log("Dog Friendly clicked!");
            return dateNights.filter(function (date) { return date.dogFriendly; });
        }
    };
    DateNightIconFilterPipe = __decorate([
        core_1.Pipe({
            name: 'iconFilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], DateNightIconFilterPipe);
    return DateNightIconFilterPipe;
}());
exports.DateNightIconFilterPipe = DateNightIconFilterPipe;
//# sourceMappingURL=date-night-date-filter.pipe.js.map