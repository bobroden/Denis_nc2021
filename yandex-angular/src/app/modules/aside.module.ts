import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskNotifComponent } from '../desk-notif/desk-notif.component';
import { AboutUserComponent } from '../about-user/about-user.component';
import { NewYearComponent } from '../new-year/new-year.component';
import { PlusComponent } from '../plus/plus.component';
import { CovidStatisticsComponent } from '../covid-statistics/covid-statistics.component';
import { AsideComponent } from '../aside/aside.component';

@NgModule({
  declarations: [
    DeskNotifComponent,
    AboutUserComponent,
    NewYearComponent,
    PlusComponent,
    CovidStatisticsComponent,
    AsideComponent
  ],
  exports: [
    DeskNotifComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsideModule { }
