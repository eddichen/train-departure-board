import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { TrainTimetableService } from './train-timetable.service';

describe('TrainTimetableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [TrainTimetableService]
    });
  });

  it('should be created', inject([TrainTimetableService], (service: TrainTimetableService) => {
    expect(service).toBeTruthy();
  }));
});
