import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface StationSearch {
  from: string,
  to: string
};

@Component({
  selector: 'app-train-search',
  templateUrl: './train-search.component.html',
  styleUrls: ['./train-search.component.scss']
})

export class TrainSearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  stationSearch: StationSearch = {
    from: '',
    to: ''
  };

  ngOnInit() {
  }

  stationSet(station: string, direction: string): void {
    if (direction === 'to') {
      this.stationSearch.to = station;
    }
    else if (direction === 'from') {
      this.stationSearch.from = station;
    }
  }

  stationSubmit(): void {
    this.router.navigate(['/trains', { from: this.stationSearch.from, to: this.stationSearch.to }]);
  }
}
