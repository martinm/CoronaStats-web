import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Country } from './country';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countryStatsUrl = 'https://corona.lmao.ninja/v2/countries';

  constructor(
    private http: HttpClient
  ) { }

  getStats(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryStatsUrl).pipe(
      tap(_ => console.log('data fetched')),
      catchError(this.errorHandler<Country[]>('country.getStats'))
    );
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
