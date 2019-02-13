import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public apiURL: string = 'https://worldcup.sfg.io/teams'
  constructor(public httpClient: HttpClient) {}

  public all() :Promise<any[]> {
    return this.httpClient.get<any[]>(this.apiURL).toPromise();
  }

  public groupResults() :Promise<any[]>{
    return this.httpClient.get<any[]>(`${this.apiURL}/group_results`).toPromise();
  }

  public results() :Promise<any[]>{
    return this.httpClient.get<any[]>(`${this.apiURL}/results`).toPromise();
  }
}
