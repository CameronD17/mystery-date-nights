import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: 'app/star-rating/star.component.html'
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    @Input() rating2: number = -1;
    averageRating: number; 
    starWidth: number;

    ngOnChanges() {
        this.averageRating = (this.rating2 === -1) ? this.rating : (this.rating + this.rating2) / 2;
        /*  I know, I know. Readability should be king. 
            The line below takes the double bitwise NOT of this.averageRating (to trim the decimal - Math.floor would do the same thing)
            and then subtracts 1, before adding the rating * starwidth. This is to account for the spaces between stars, and display part
            rating in a cleaner way.
        */
        this.starWidth = (~~this.averageRating - 1) + (this.averageRating * 24);
    }
}