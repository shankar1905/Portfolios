import { NgModule } from '@angular/core';
import { BrowserModule , Title , Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainPanelComponent } from './core/main-panel/main-panel.component';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPanelComponent,
    HeaderComponent
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [Title,Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
