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
var StarComponent = (function () {
    function StarComponent() {
        this.rating2 = -1;
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.averageRating = (this.rating2 === -1) ? this.rating : (this.rating + this.rating2) / 2;
        /*  I know, I know. Readability should be king.
            The line below takes the double bitwise NOT of this.averageRating (to trim the decimal - Math.floor would do the same thing)
            and then subtracts 1, before adding the rating * starwidth. This is to account for the spaces between stars, and display part
            rating in a cleaner way.
        */
        this.starWidth = (~~this.averageRating - 1) + (this.averageRating * 24);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarComponent.prototype, "rating2", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'star-rating',
            templateUrl: 'app/star-rating/star.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map