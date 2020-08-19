import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Global } from './global';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private globalStatsUrl = 'https://disease.sh/v3/covid-19/all';

  constructor(
    private http: HttpClient
  ) { }

  getStats(): Observable<Global> {
    return this.http.get<Global>(this.globalStatsUrl).pipe(
      tap(_ => console.log('data fetched')),
      catchError(this.errorHandler<Global>('global.getStats'))
    );
  }

  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

