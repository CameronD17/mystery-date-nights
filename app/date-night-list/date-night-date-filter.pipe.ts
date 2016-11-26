import { Pipe,PipeTransform } from "@angular/core";
import { IDateNight } from '../date-night/date-night';

@Pipe({
    name: 'iconFilter',
    pure: false
})

export class DateNightIconFilterPipe implements PipeTransform {
    transform(dateNights: IDateNight[], args: string): IDateNight[]{        
        if (!dateNights) return null;
        if (!args) return dateNights;
        let filter: string = args.toLocaleLowerCase(); 
        console.log(filter);
        if (filter == 'dogfriendly') {          
            console.log("Dog Friendly clicked!");
            return dateNights.filter((date: IDateNight) => date.dogFriendly); 
        }       
    }
}