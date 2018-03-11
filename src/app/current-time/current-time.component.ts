import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {

  constructor() { }

  currentTime: string;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 999);
  }

  getCurrentTime(): string {
    let currentDate = new Date(Date.now());
    let hours = this.formatSingleDigits(currentDate.getHours().toString());
    let minutes = this.formatSingleDigits(currentDate.getMinutes().toString());
    let seconds = this.formatSingleDigits(currentDate.getSeconds().toString());

    return `${hours}:${minutes}:${seconds}`;
  }

  formatSingleDigits(time: string): string {
    if(time.length === 1) {
      return "0" + time;
    }
    return time;
  }
}
