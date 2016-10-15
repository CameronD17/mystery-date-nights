import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: 'app/star-rating/star.component.html',
    styleUrls: ['app/star-rating/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Input() rating2: number = -1;
    averageRating: number; 
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() {
        this.averageRating = (this.rating2 === -1) ? this.rating : (this.rating + this.rating2) / 2;
        this.starWidth = this.averageRating * 86 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }
}