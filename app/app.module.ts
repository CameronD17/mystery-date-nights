import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { routing } from './app.routes';

import { DateNightListComponent } from './date-night-list/date-night-list.component';
import { DateNightFilterPipe } from './date-night-list/date-night-filter.pipe';
import { DateNightOrderPipe } from './date-night-list/date-night-date-filter.pipe';
import { DateNightDetailComponent } from './date-night-detail/date-night-detail.component';
import { DateNightMapComponent } from './date-night-map/date-night-map.component';
import { StarComponent } from './star-rating/star.component';
import { CostComponent } from './cost-rating/cost.component';

@NgModule({
  imports:      [ 
    BrowserModule,    
    FormsModule,
    routing, 
    HttpModule
  ],
  declarations: [ 
    AppComponent, 
    DateNightListComponent, 
    DateNightFilterPipe,
    DateNightOrderPipe, 
    DateNightDetailComponent,
    DateNightMapComponent,
    StarComponent,
    CostComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})

export class AppModule { }