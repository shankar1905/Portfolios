// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { RouterModule } from '@angular/router';
// import {Not_FoundRoutes} from './not-found.routes';

// @NgModule({
//   declarations: [
//     NotFoundComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(Not_FoundRoutes),
//   ]
// })
// export class NotFoundModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent }
    ])
  ]
})
export class NotFoundModule {}
