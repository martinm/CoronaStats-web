import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: '', redirectTo: '/global', pathMatch: 'full'},
  { path: 'global', component: GlobalStatsComponent },
  { path: 'countries', component: CountryStatsComponent},
  { path: 'country/:country', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
