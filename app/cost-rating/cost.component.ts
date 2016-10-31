import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'cost-rating',
    templateUrl: 'app/cost-rating/cost.component.html'
})

export class CostComponent{
    @Input() rating: number;
}