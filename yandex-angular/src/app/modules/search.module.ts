import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YandexServicesNavigationComponent } from '../yandex-services-navigation/yandex-services-navigation.component';
import { SearchComponent } from '../search/search.component';
import { DownloadYandexBrowserComponent } from '../download-yandex-browser/download-yandex-browser.component';
import { InputComponent } from '../input/input.component';
import { AdvertisementComponent } from '../advertisement/advertisement.component';

@NgModule({
  declarations: [
    YandexServicesNavigationComponent,
    SearchComponent,
    DownloadYandexBrowserComponent,
    InputComponent,
    AdvertisementComponent
  ],
  exports: [
    YandexServicesNavigationComponent,
    SearchComponent,
    DownloadYandexBrowserComponent,
    AdvertisementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
