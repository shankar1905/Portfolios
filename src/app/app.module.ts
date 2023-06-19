import { NgModule } from '@angular/core';
import { BrowserModule , Title , Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainPanelComponent } from './core/main-panel/main-panel.component';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AppRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPanelComponent,
    HeaderComponent
   
  ],
  imports: [
    NgxUsefulSwiperModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [Title,Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
