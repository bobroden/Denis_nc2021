import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from '../news/news.component';
import { NewsTitlesComponent } from '../news-titles/news-titles.component';
import { BlogComponent } from '../blog/blog.component';
import { VideoButtonsComponent } from '../video-buttons/video-buttons.component';
import { ShareButtonComponent } from '../share-button/share-button.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsTitlesComponent,
    BlogComponent,
    VideoButtonsComponent,
    ShareButtonComponent
  ],
  exports: [
    NewsComponent,
    NewsTitlesComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
