import { TestBed, inject } from '@angular/core/testing';

import { TrainTimetableService } from './train-timetable.service';

describe('TrainTimetableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainTimetableService]
    });
  });

  it('should be created', inject([TrainTimetableService], (service: TrainTimetableService) => {
    expect(service).toBeTruthy();
  }));
});
