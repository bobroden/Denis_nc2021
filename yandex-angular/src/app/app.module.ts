import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule } from './modules/header.module';
import { AsideModule } from './modules/aside.module';
import { MainInfoModule } from './modules/main-info.module';
import { SearchModule } from './modules/search.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AsideModule,
    MainInfoModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
