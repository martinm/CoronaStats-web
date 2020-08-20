import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: Subject<Country[]> = new Subject<Country[]>();

  constructor() { }

  search(word: string, countries): void {
    this.searchResults.next(this.checkAndFilter(word, countries));
  }

  checkAndFilter(word: string, countries: Country[]): Country[] {
    return this.isSearchActive(word) ? this.filterArray(word, countries) : [];
  }

  isSearchActive(word: string): boolean {
    return word.length > 0;
  }

  filterArray(word: string, countries: Country[]): Country[] {
    return countries.filter(country => country.country.includes(word));
  }

}
