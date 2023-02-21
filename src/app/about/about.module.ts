import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {AboutRoutes} from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes)
  ]
})
export class AboutModule { }
