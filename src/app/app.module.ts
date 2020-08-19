import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryComponent } from './country/country.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalStatsComponent,
    CountryStatsComponent,
    NavbarComponent,
    CountryComponent,
    SearchComponent
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
