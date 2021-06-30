import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from 'src/app/comment/comment.component';
import { IStory } from 'src/app/models/stories';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent implements OnInit {
  @Input()
  story!: IStory;

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '700px',
      data: { commentIds: this.story.kids.slice(0, 3) },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
