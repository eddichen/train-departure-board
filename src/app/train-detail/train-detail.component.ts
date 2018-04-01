import { Component, OnInit } from '@angular/core';
import { TrainTimetableService } from '../train-timetable.service';
import * as moment from 'moment';

export interface Station {
  areServicesAvailable: boolean;
  busServices: boolean;
  crs: string;
  ferryServices: boolean;
  filterLocationName: string;
  filterType: number;
  filtercrs: string;
  generatedAt: string;
  locationName: string;
  nrccMessages: string;
  platformAvailable: boolean;
  trainServices: TrainServices[];  
}

export interface TrainServices {
  adhocAlerts: string;
  cancelReason: string;
  currentDestinations: string;
  currentOrigins: string;
  delayReason: string;
  destination: Destination[];
  detachFront: boolean;
  eta: string;
  etd: string;
  filterLocationCancelled: boolean;
  isCancelled: boolean;
  isCircularRoute: boolean;
  isReverseFormation: boolean;
  length: number;
  operator: string;
  operatorCode: string;
  origin: Origin[];
  platform: string;
  rsid: string;
  serviceID: string;
  serviceIdGuid: string;
  serviceIdPercentEncoded: string;
  serviceIdUrlSafe: string;
  serviceType: number;
  sta: string;
  std: string;
}

export interface Destination {
  assocIsCancelled: boolean;
  crs: string;
  futureChangeTo: string;
  locationName: string;
  via: string;
}

export interface Origin {
  assocIsCancelled: boolean;
  crs: string;
  futureChangeTo: string;
  locationName: string;
  via: string;
}

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.scss']
})
export class TrainDetailComponent implements OnInit {

  constructor(
    private trainTimetableService: TrainTimetableService
  ) { }

  trains: {};
  timeToLeave: number;

  ngOnInit(): void {
    moment.updateLocale('en', {
      relativeTime : {
          future: "in %s",
          past:   "%s ago",
          s  : 'a few seconds',
          ss : '%d secs',
          m:  "1 min",
          mm: "%d min",
          h:  "1 hr",
          hh: "%d hrs",
          d:  "a day",
          dd: "%d days",
          M:  "a month",
          MM: "%d months",
          y:  "a year",
          yy: "%d years"
      }
    });
    moment.relativeTimeThreshold('m', 59);

    this.setTrainTimes();
  }

  setTrainTimes(): void {
    this.trainTimetableService.getTrainTimes()
      .subscribe(resp => {
        console.log(resp);
        this.trains = { ...resp };
      },
      error => {
        console.log(error);
      })
  }

  departureTime(trainDepartureTime, trainExpectedTime): string {
    let splitDepartureTime;
    if (trainExpectedTime && trainExpectedTime !== 'On time') {
      return trainExpectedTime;
    }
    else {
      splitDepartureTime = this.splitTime(trainDepartureTime);
      let trainDepartureDate = moment().hour(splitDepartureTime[0]).minute(splitDepartureTime[1]);
      return moment(trainDepartureDate).toNow(true);
    }
  }

  splitTime(time): Array<string> {
    return time.split(/:/g, 2);
  }
}
