import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IDateNight } from '../date-night/date-night';
import { DateNightService } from '../date-night/date-night.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
    providers: [DateNightService],
    templateUrl: 'app/date-nights/date-night-detail/date-night-detail.component.html'
})

export class DateNightDetailComponent implements OnInit {
    pageTitle: string = 'Date Night Detail';
    dateNight: IDateNight;
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: DateNightService) {
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(
            params => {
                let id = Number.parseInt(params['id']);          
                this.pageTitle += `: ${id}`;
                this.getDateNight(id);
        });
    }
    getDateNight(id: number) {
        this.service.getProduct(id).subscribe(
            date => this.dateNight = date,
            error => this.errorMessage = <any>error);
    }
}