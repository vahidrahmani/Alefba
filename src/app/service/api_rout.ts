import { Injectable } from '@angular/core';

@Injectable()
export class apiUrl {
  _baseUrl = 'https://hacker-news.firebaseio.com/v0/';
 
  protected story = {
    topstories: this._baseUrl + 'topstories.json'
  }
}
