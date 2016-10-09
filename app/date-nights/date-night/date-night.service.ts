import { Injectable } from '@angular/core';
import { IDateNight } from './date-night';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DateNightService {

    private _dateNightData = 'data/date-nights.json';
    dateNight: IDateNight;
    constructor(private _http: Http) {}

    getDateNights(): Observable<IDateNight[]> {
        return this._http.get(this._dateNightData)
        .map((response: Response) => <IDateNight[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IDateNight> {
        return this.getDateNights()
            .map((products: IDateNight[]) => products.find(p => p.dateNightId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}