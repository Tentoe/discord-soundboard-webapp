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
const guildURL = baseURL + 'guild/';
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



  getStopURL(guildID: string): string {
    const ret = guildURL + guildID + stopURL;
    return ret;
  }

  getPlayURL(guildID: string, soundFileID: string): string {
    const ret = guildURL + guildID + playURL + soundFileID;
    return ret;
  }

  getJoinURL(voiceID: string): string {
    const ret = voiceChannelURL + voiceID + joinURL;
    return ret;
  }

  getLeaveURL(guildID: string): string {
    const ret = guildURL + guildID + leaveURL;
    return ret;
  }

  getGuildURL(guildID: string): string {
    const ret = guildURL + guildID;
    return ret;
  }

  getPlayRandomURL(guildID: string): string {
    const ret = guildURL + guildID + randomURL;
    return ret;
  }

  getGuilds(): Observable<Guild[]> {
    return this.http.get<Guild[]>(guildsURL)
      .pipe(
        tap(() => console.log('got Guilds')), // TODO better Logging
        map(guilds => guilds.map(g => new Guild(g))),
        catchError(this.handleError('getGuilds', []))
      );

  }

  getGuild(id: string): Observable<Guild> {
    return this.http.get<Guild>(this.getGuildURL(id))
      .pipe(
        tap(() => console.log('got Guild')), // TODO better Logging
        map(g => new Guild(g)),
        catchError(this.handleError('getGuild', null))
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

  playSoundFile(guildID: string, soundFileID: string) { // TODO Type
    return this.http.post<string>(this.getPlayURL(guildID, soundFileID), '', httpOptions)
      .pipe(
        tap(() => console.log('playSoundFile+')), // TODO better Logging
        catchError(this.handleError('playSoundFile', []))
      );
  }
  playRandomSoundFile(guildID: string) { // TODO Type
    return this.http.post<string>(this.getPlayRandomURL(guildID), '', httpOptions)
      .pipe(
        tap(() => console.log('playRandomSoundFile+')), // TODO better Logging
        catchError(this.handleError('playSoundFile', []))
      );
  }

  stop(guildID: string) { // TODO Type
    return this.http.post<string>(this.getStopURL(guildID), '', httpOptions)
      .pipe(
        tap(() => console.log('stop+')), // TODO better Logging
        catchError(this.handleError('stop', []))
      );
  }

  leaveVoiceChannel(guildID: string) { // TODO Type
    return this.http.post<string>(this.getLeaveURL(guildID), '', httpOptions)
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
