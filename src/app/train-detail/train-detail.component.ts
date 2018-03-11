import { Component, OnInit } from '@angular/core';
import { TrainTimetableService } from '../train-timetable.service';

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

  ngOnInit() {
    this.setTrainTimes();
    
    setInterval(() => {
      this.setTrainTimes();
    }, 60000);
  }

  setTrainTimes() {
    this.trainTimetableService.getTrainTimes()
      .subscribe(resp => {
        console.log(resp);
        this.trains = { ...resp };
      },
      error => {
        console.log(error);
      })
  }

}
