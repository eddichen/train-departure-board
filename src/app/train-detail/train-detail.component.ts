import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

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
    private route: ActivatedRoute,
    private trainTimetableService: TrainTimetableService
  ) { }

  trains: {};
  timeToLeave: number;
  displayLoader: boolean;

  ngOnInit(): void {
    this.showLoader();
    moment.updateLocale('en', {
      relativeTime : {
          future: "in %s",
          past:   "%s ago",
          s  : 'due',
          ss : '%dsecs',
          m:  "1min",
          mm: "%dmin",
          h:  "1hr",
          hh: "%dhr",
          d:  "a day",
          dd: "%d days",
          M:  "a month",
          MM: "%d months",
          y:  "a year",
          yy: "%d years"
      }
    });
    moment.relativeTimeThreshold('m', 59);

    const stations = this.route.paramMap.subscribe((params: ParamMap) => {
      this.setTrainTimes(params.get('from'), params.get('to'));
    })
    this.hideLoader();
  }

  showLoader() {
    console.log('show loader');
    this.displayLoader = true;
  }

  hideLoader() {
    this.displayLoader = false;
  }

  setTrainTimes(from: string, to: string): void {
    this.trainTimetableService.getTrainTimes(from, to)
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
