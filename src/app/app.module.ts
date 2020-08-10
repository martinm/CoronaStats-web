import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalStatsComponent,
    CountryStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
