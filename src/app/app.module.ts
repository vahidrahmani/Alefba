import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { StoryComponent } from './story/story.component';
import { AppRouters } from './app.routes';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { StoryListComponent } from './story/story-list/story-list.component';
import { ToShamsiDatePipe } from './service/to-shamsi-date.pipe';
import { CommentComponent } from './comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StoryComponent,
    StoryListComponent,
    ToShamsiDatePipe,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppRouters,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
