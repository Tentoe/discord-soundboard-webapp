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

const baseURL = '/api/';
const guildsURL = baseURL + 'guilds';
const soundFilesURL = baseURL + 'soundboards';
const voiceChannelURL = baseURL + 'voicechannel/';
const playURL = '/play/';
const stopURL = '/stop';
const joinURL = '/join';
const leaveURL = '/leave';
const randomURL = '/random';



@Injectable()
export class DiscordBotApiService {

  constructor(private http: HttpClient) { }



  getStopURL(voiceID: string): string {
    const ret = voiceChannelURL + voiceID + stopURL;
    return ret;
  }

  getPlayURL(voiceID: string, soundFileID: string): string {
    const ret = voiceChannelURL + voiceID + playURL + soundFileID;
    return ret;
  }

  getJoinURL(voiceID: string): string {
    const ret = voiceChannelURL + voiceID + joinURL;
    return ret;
  }

  getLeaveURL(voiceID: string): string {
    const ret = voiceChannelURL + voiceID + leaveURL;
    return ret;
  }

  getPlayRandomURL(voiceID: string): string {
    const ret = voiceChannelURL + voiceID + randomURL;
    return ret;
  }

  getGuilds(): Observable<Guild[]> {
    return this.http.get<Guild[]>(guildsURL)
      .pipe(
        tap(() => console.log('got Heroes')), // TODO better Logging
        map(guilds => guilds.map(g => new Guild(g))),
        catchError(this.handleError('getHeroes', []))
      );

  }

  joinVoiceChannel(id: string) { // TODO Type
    return this.http.post<string>(this.getJoinURL(id), '', httpOptions)
      .pipe(
        tap(() => console.log('joinVoiceChannelURL+')), // TODO better Logging
        catchError(this.handleError('joinVoiceChannel', []))
      );
  }


  getSoundFiles() { // TODO Type
    return this.http.get<string>(soundFilesURL, httpOptions)
      .pipe(
        tap(() => console.log('soundFilesURL+')), // TODO better Logging
        catchError(this.handleError('getSoundFiles', []))
      );
  }

  playSoundFile(voiceID: string, soundFileID: string) { // TODO Type
    return this.http.post<string>(this.getPlayURL(voiceID, soundFileID), '', httpOptions)
      .pipe(
        tap(() => console.log('playSoundFile+')), // TODO better Logging
        catchError(this.handleError('playSoundFile', []))
      );
  }
  playRandomSoundFile(voiceID: string) { // TODO Type
    return this.http.post<string>(this.getPlayRandomURL(voiceID), '', httpOptions)
      .pipe(
        tap(() => console.log('playSoundFile+')), // TODO better Logging
        catchError(this.handleError('playSoundFile', []))
      );
  }

  stop(voiceID: string) { // TODO Type
    return this.http.post<string>(this.getStopURL(voiceID), '', httpOptions)
      .pipe(
        tap(() => console.log('stop+')), // TODO better Logging
        catchError(this.handleError('stop', []))
      );
  }

  leaveVoiceChannel(voiceID: string) { // TODO Type
    return this.http.post<string>(this.getLeaveURL(voiceID), '', httpOptions)
      .pipe(
        tap(() => console.log('leave+')), // TODO better Logging
        catchError(this.handleError('leave', []))
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
