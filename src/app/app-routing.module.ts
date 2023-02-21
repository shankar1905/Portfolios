import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app.routes';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { useHash: false })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
