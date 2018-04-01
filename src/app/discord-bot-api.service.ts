import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Guild } from './models/guild';
import { Channel } from './models/channel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DiscordBotApiService {
  baseURL = '/api/';
  guildsURL = this.baseURL + 'guilds';
  joinVoiceChannelURL = this.baseURL + 'joinVoiceChannel/';

  constructor(private http: HttpClient) { }

  getGuilds(): Observable<Guild[]> {
    return this.http.get<Guild[]>(this.guildsURL)
      .pipe(
        tap(() => console.log('got Heroes')), // TODO better Logging
        map(guilds => guilds.map(g => new Guild(g))),
        catchError(this.handleError('getHeroes', []))
      );

  }

  joinVoiceChannel(id: string) {
    return this.http.post<string>(this.joinVoiceChannelURL + id, '', httpOptions)
      .pipe(
        tap(() => console.log('joinVoiceChannelURL+')), // TODO better Logging
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
