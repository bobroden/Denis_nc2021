import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from '../weather/weather.component';
import { TrafficJamsComponent } from '../traffic-jams/traffic-jams.component';
import { QuotesComponent } from '../quotes/quotes.component';

@NgModule({
  declarations: [
    WeatherComponent,
    TrafficJamsComponent,
    QuotesComponent
  ],
  exports: [
    WeatherComponent,
    TrafficJamsComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogAsideModule { }
