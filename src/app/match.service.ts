import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Match } from './models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  public apiURL: string = 'https://worldcup.sfg.io/matches'
  constructor(public httpClient: HttpClient) { }

  public all() :Promise<Match[]> {
    return this.httpClient.get<Match[]>(this.apiURL).toPromise();
  }
}
