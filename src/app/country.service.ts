import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Country } from './country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryStatsUrl = 'https://disease.sh/v3/covid-19/countries';

  constructor(
    private http: HttpClient,
  ) { }

  getStats(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryStatsUrl).pipe(
      tap(_ => console.log('data fetched')),
      catchError(this.errorHandler<Country[]>('country.getStats'))
    );
  }

  getCountry(country: string): Observable<Country> {
    const url = `${this.countryStatsUrl}/${country}`;
    
    return this.http.get<Country>(url).pipe(
      tap(_ => console.log(`${country} data fetched`)),
      catchError(this.errorHandler<Country>('country.getCountry'))
    );
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
