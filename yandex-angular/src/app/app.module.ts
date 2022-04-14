import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AsideComponent } from './aside/aside.component';
import { BlogComponent } from './blog/blog.component';
import { CovidStatisticsComponent } from './covid-statistics/covid-statistics.component';
import { DateComponent } from './date/date.component';
import { DefaultComponent } from './default/default.component';
import { DeskNotifComponent } from './desk-notif/desk-notif.component';
import { DownloadYandexBrowserComponent } from './download-yandex-browser/download-yandex-browser.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { HeaderComponent } from './header/header.component';
import { IconsComponent } from './icons/icons.component';
import { InputComponent } from './input/input.component';
import { MainComponent } from './main/main.component';
import { NewYearComponent } from './new-year/new-year.component';
import { NewsTitlesComponent } from './news-titles/news-titles.component';
import { NewsComponent } from './news/news.component';
import { PlusComponent } from './plus/plus.component';
import { QuotesComponent } from './quotes/quotes.component';
import { SearchComponent } from './search/search.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { TrafficJamsComponent } from './traffic-jams/traffic-jams.component';
import { VideoButtonsComponent } from './video-buttons/video-buttons.component';
import { WeatherComponent } from './weather/weather.component';
import { YandexServicesNavigationComponent } from './yandex-services-navigation/yandex-services-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUserComponent,
    AdvertisementComponent,
    AsideComponent,
    BlogComponent,
    CovidStatisticsComponent,
    DateComponent,
    DefaultComponent,
    DeskNotifComponent,
    DownloadYandexBrowserComponent,
    GeolocationComponent,
    HeaderComponent,
    IconsComponent,
    InputComponent,
    MainComponent,
    NewYearComponent,
    NewsTitlesComponent,
    NewsComponent,
    PlusComponent,
    QuotesComponent,
    SearchComponent,
    ShareButtonComponent,
    TrafficJamsComponent,
    VideoButtonsComponent,
    WeatherComponent,
    YandexServicesNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
