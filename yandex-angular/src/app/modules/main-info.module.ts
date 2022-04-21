import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogModule } from './blog.module';
import { BlogAsideModule } from './blog-aside.module';

import { MainComponent } from '../main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    BlogModule,
    BlogAsideModule
  ]
})
export class MainInfoModule { }
