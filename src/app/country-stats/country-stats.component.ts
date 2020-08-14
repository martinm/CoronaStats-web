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

  sort(prop): void {
      this.countries.sort((a, b) => (a[prop] < b[prop]) ? 1 : -1)
  }
  
}
