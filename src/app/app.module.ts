import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrainTimetableService } from './train-timetable.service';
import { TrainDetailComponent } from './train-detail/train-detail.component';
import { CurrentTimeComponent } from './current-time/current-time.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainDetailComponent,
    CurrentTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TrainTimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
