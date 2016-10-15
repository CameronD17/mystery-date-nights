import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cost-rating',
    templateUrl: 'app/cost-rating/cost.component.html',
    styleUrls: ['app/cost-rating/cost.component.css']
})

export class CostComponent implements OnChanges{
    @Input() rating: number;
    gbpWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        this.gbpWidth = this.rating * 86 / 5;
    }
}