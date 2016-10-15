//The pipe class implements the PipeTransform interface's transform method that accepts an input value and an optional array of parameters and returns the transformed value.

import { Pipe,PipeTransform } from "@angular/core";@Pipe({
  name: "orderBy"
})

export class DateNightOrderPipe implements PipeTransform {
    transform(array:Array<any>, args?) {
        if(array) {
            let column = args
            let byVal = 1
            if(column.charAt(0) == "!") {
                byVal = -1
                column = column.substring(1)
            }

            array.sort((a: any, b: any) => {
                if (column == 'visitDate') {
                    return (new Date(a.visitDate).getTime() - new Date(b.visitDate).getTime()) * byVal; 
                } else if (column == 'locationName') {
                    if(a.locationName < b.locationName) {
                        return -1 * byVal;
                    } else if (a.locationName > b.locationName) {
                        return 1 * byVal;
                    } else {
                        return 0;
                    }
                } else if (column == 'type') {
                    if(a.type < b.type) {
                        return -1 * byVal;
                    } else if (a.type > b.type) {
                        return 1 * byVal;
                    } else if(a.locationName < b.locationName) {
                        return -1 * byVal;
                    } else if (a.locationName > b.locationName) {
                        return 1 * byVal;
                    } else {
                        return 0;
                    }
                } else if (column == 'rating') {
                    let aRating = a.starRatingCameron + a.starRatingSasha
                    let bRating = b.starRatingCameron + b.starRatingSasha
                    if(aRating < bRating) {
                        return -1 * byVal;
                    } else if (aRating > bRating) {
                        return 1 * byVal;
                    } else if(a.locationName < b.locationName) {
                        return -1 * byVal;
                    } else if (a.locationName > b.locationName) {
                        return 1 * byVal;
                    } else {
                        return 0;
                    }
                }
            });
            return array;
        }
    }
}