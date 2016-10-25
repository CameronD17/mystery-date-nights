import { Routes, RouterModule } from '@angular/router';
import { DateNightListComponent } from './date-night-list/date-night-list.component';
import { DateNightDetailComponent } from './date-night-detail/date-night-detail.component';
import { DateNightMapComponent } from './date-night-map/date-night-map.component';
import { DateNightAboutComponent } from './about/date-night-about.component';

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
        path: '', 
        component: DateNightAboutComponent
    },
    {   
        path: 'date/:slug', 
        component: DateNightDetailComponent 
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);