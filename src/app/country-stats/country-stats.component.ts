import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { SearchService } from '../search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {
  countries: Country[];
  searchResults: Country[];
  number: number;

  constructor(
    private countryService: CountryService,
    public searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getStats();
    this.getNumber();
    // this.search();
  }

  getNumber(): void {
    this.searchService.searchResults.subscribe(result => this.searchResults = result);
  }

  getStats(): void {
    this.countryService.getStats().subscribe(
      stats => this.countries = stats);
  }

  sort(prop): void {
      this.countries.sort((a, b) => (a[prop] < b[prop]) ? 1 : -1)
  }

  search() {
    this.searchService.searchResults.subscribe(
      stats => this.searchResults = stats);
  }
  
}
