import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as rxjs from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { IStory } from '../models/stories';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  public error: string = '';
  public storis$: Observable<IStory[]> = of([]);
  public loading: boolean = false;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.loading = true;
    this.dataService
      .getTopStories()
      .pipe(
        rxjs.map((data: any) => {
          return data.slice(0, 5);
        }),
        rxjs.map((data: any) => {
          let array: any = [];
          data.forEach((item: any) => {
            array.push(
              this.dataService.getstoryInfo(item).pipe(
                rxjs.catchError((error) => {
                  //this.error = error;
                  return of(error);
                })
              )
            );
          });
          this.storis$ = forkJoin(array) as Observable<IStory[]>;
        }),
        rxjs.catchError((error) => {
          this.error = error;
          return of(error);
        }),
        rxjs.finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(() => {});
  }
  isString(item: IStory | string): boolean {
    return typeof item == 'string';
  }
}
