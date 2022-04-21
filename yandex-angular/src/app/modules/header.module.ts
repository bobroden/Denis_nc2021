import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';
import { DateComponent } from '../date/date.component';
import { DefaultComponent } from '../default/default.component';
import { IconsComponent } from '../icons/icons.component';

@NgModule({
  declarations: [
    HeaderComponent,
    GeolocationComponent,
    DateComponent,
    DefaultComponent,
    IconsComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
