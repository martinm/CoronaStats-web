import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  countries: Country[];
  searchResults: Country[]

  constructor(
    private countryService: CountryService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(word: string) {
    this.searchService.search(word, this.countries);
  }

  getStats(): void {
    this.countryService.getStats().subscribe(
      stats => this.countries = stats)
  }

}