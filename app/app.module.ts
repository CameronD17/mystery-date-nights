import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { routing } from './app.routes';

import { DateNightListComponent } from './date-nights/date-night-list/date-night-list.component';
import { DateNightDetailComponent } from './date-nights/date-night-detail/date-night-detail.component';
import { DateNightMapComponent } from './date-nights/date-night-map/date-night-map.component';


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
    DateNightDetailComponent,
    DateNightMapComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})

export class AppModule { }