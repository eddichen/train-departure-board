import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TrainTimetableService {
  constructor(
    private http: HttpClient
  ) {}

  getTrainTimes() {
    const trainsUrl = 'https://rail-3.apphb.com/';
    const trainDirection = 'departures/syh/to/hnh/';
    const resultCount = 5;
    const accessToken = 'a568f8a6-3d7a-4c4e-93fd-6623fa286b1d';

    return this.http.get(trainsUrl + trainDirection + resultCount + '?accessToken=' + accessToken)
  }  
}
