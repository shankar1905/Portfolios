import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {ContactUsRoutes} from './contact-us.routes';
import {ContactUsComponent}  from './contact-us.component'
@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactUsRoutes)
  ]
})
export class ContactUsModule { }
