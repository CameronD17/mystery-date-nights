import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { RouterModule }   from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';
import { routing }        from './app.routes';

import { DateNightAboutComponent } from './about/date-night-about.component';
import { DateNightListComponent } from './date-night-list/date-night-list.component';
import { DateNightFilterPipe } from './date-night-list/date-night-filter.pipe';
import { DateNightOrderPipe } from './date-night-list/date-night-date-order.pipe';
import { DateNightIconFilterPipe } from './date-night-list/date-night-date-filter.pipe';
import { DateNightDetailComponent } from './date-night-detail/date-night-detail.component';
import { DateNightMapComponent } from './date-night-map/date-night-map.component';
import { StarComponent } from './star-rating/star.component';
import { CostComponent } from './cost-rating/cost.component';
import { DateNightService } from './date-night/date-night.service';

@NgModule({  
  declarations: [ 
    AppComponent, 
    DateNightAboutComponent,
    DateNightListComponent, 
    DateNightFilterPipe,
    DateNightOrderPipe,
    DateNightIconFilterPipe, 
    DateNightDetailComponent,
    DateNightMapComponent,
    StarComponent,
    CostComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  imports:      [ 
    BrowserModule,    
    FormsModule,
    routing, 
    HttpModule
  ],
  providers: [
    DateNightService,
    { 
      provide: LocationStrategy, 
      useClass: PathLocationStrategy
    }
  ]
})

export class AppModule { }