import { Routes, RouterModule } from '@angular/router';
import { DateNightListComponent } from './date-nights/date-night-list/date-night-list.component';
import { DateNightDetailComponent } from './date-nights/date-night-detail/date-night-detail.component';
import { DateNightMapComponent } from './date-nights/date-night-map/date-night-map.component';

const routes: Routes =[
    { 
        path: 'list', 
        component: DateNightListComponent
    },
    { 
        path: 'map', 
        component: DateNightMapComponent
    },
    {   
        path: 'date/:id', 
        component: DateNightDetailComponent 
    },
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);