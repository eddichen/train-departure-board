import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { TrainDetailComponent } from './train-detail.component';
import { TrainTimetableService } from '../train-timetable.service';

describe('TrainDetailComponent', () => {
  let component: TrainDetailComponent;
  let fixture: ComponentFixture<TrainDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TrainDetailComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        TrainTimetableService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
