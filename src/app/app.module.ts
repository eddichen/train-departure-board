import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainTimetableService } from './train-timetable.service';
import { TrainDetailComponent } from './train-detail/train-detail.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { TrainSearchComponent } from './train-search/train-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainDetailComponent,
    CurrentTimeComponent,
    TrainSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TrainTimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
