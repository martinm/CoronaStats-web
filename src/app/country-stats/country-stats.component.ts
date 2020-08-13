import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  countries: Country[];
  switch = true;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.getStats()
  }

  getStats(): void {
    this.countryService.getStats().subscribe(
      stats => this.countries = stats)
  }

  testing(prop): void {
    if (this.switch) {
      this.countries.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1)
    } else {
      this.countries.sort((a, b) => (a[prop] < b[prop]) ? 1 : -1)
    }
    this.switch = !this.switch
  }

  compare( a, b ) {
    if ( a.cases > b.cases ){
      return -1;
    }
    if ( a.cases < b.cases ){
      return 1;
    }
    return 0;
  }

  
}
