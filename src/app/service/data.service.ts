import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { apiUrl } from './api_rout';
import { catchError, tap, map } from 'rxjs/operators';
import { IStory } from '../models/stories';
@Injectable()
export class DataService extends apiUrl {
  constructor(private $http: HttpClient) {
    super();
  }

  getTopStories(): Observable<any> {
    return this.$http
      .get(this.story.topstories)
      .pipe(
        catchError((error) => throwError('Error in getting get Top Stories'))
      );
  }

  getstoryInfo(id: number): Observable<any> {
    return this.$http
      .get(this._baseUrl + `item/${id}.json`)
      .pipe(
        catchError((error) => throwError('Error in getting getstory Info'))
      );
  }
}
