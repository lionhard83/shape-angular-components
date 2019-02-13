import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  public apiUrl: string = 'https://fake-tweets-api.herokuapp.com/tweets'
  constructor(public httpClient: HttpClient) {}

  public all() :Promise<Tweet[]>{
    return this.httpClient.get<Tweet[]>(this.apiUrl).toPromise();
  }

  public byId(id :number) :Promise<Tweet>{
    return this.httpClient.get<Tweet>(`${this.apiUrl}/${id}`).toPromise();
  }

  public add(tweet: Tweet) : Promise<Tweet>{
    return this.httpClient.post<Tweet>(this.apiUrl, tweet, {}).toPromise();
  }


}
