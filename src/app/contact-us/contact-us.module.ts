import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import {ContactUsRoutes} from './contact-us.routes';
import {ContactUsComponent}  from './contact-us.component'
@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(ContactUsRoutes)
  ]
})
export class ContactUsModule { }
