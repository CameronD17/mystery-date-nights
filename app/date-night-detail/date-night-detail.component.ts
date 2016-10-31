import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IDateNight } from '../date-night/date-night';
import { DateNightService } from '../date-night/date-night.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { StarComponent } from '../star-rating/star.component';
import { CostComponent } from '../cost-rating/cost.component';

@Component({
    templateUrl: 'app/date-night-detail/date-night-detail.component.html',
    providers: [StarComponent, CostComponent]
})

export class DateNightDetailComponent implements OnInit {
    pageTitle: string = 'Date Night Detail';
    dateNight: IDateNight;
    prevDateNight: IDateNight;
    nextDateNight: IDateNight;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: DateNightService) {
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(
            params => {
                let slug = params['slug'];
                this.pageTitle += `: ${slug}`;      
                this.getDateNight(slug);       
        });
    }

    getDateNight(slug: string) {
        this.service.getDateNight(slug).subscribe(
            date => this.dateNight = date, 
            error => this.errorMessage = <any>error);
            
        //this.getPrevDateNight(this.dateNight.dateNightId - 1); 
    }
}