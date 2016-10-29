import { Injectable } from '@angular/core';
import { IDateNight } from './date-night';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DateNightService {
    private _dateNightData = 'app/date-night/date-nights.json';
    private cached: IDateNight[];
    constructor(private _http: Http) {}

    getDateNights(): Observable<IDateNight[]> {
        if (this.cached) {
            console.log("Cached.");
            return Observable.of(this.cached);
        }
        else {
            console.log("Not cached.");
            return this._http.get(this._dateNightData)
                .map(res => res.json())
                .do((data) => {
                    this.cached = data;
                })
                .catch(this.handleError);
        }
    }

    getProduct(slug: string): Observable<IDateNight> {
        return this.getDateNights()
            .map((products: IDateNight[]) => products.find(p => p.slug === slug));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}