import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import * as rxjs from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { IStory } from '../models/stories';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  public comments$: Observable<IStory[]> = of([]);
  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { commentIds: Array<number> }
  ) {}

  ngOnInit(): void {
    let array: any = [];
    this.data.commentIds.forEach((item: any) => {
      array.push(
        this.dataService.getstoryInfo(item).pipe(
          rxjs.catchError(() => {
            return of('Error in getting comment');
          })
        )
      );
    });
    this.comments$ = forkJoin(array) as Observable<IStory[]>;
  }
}
