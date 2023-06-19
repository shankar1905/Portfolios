import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';

import {ProjectsRoutes} from "./projects.routes";
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    RouterModule.forChild(ProjectsRoutes)
  ]
})
export class ProjectsModule { }
