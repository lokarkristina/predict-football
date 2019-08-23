import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionAddComponent } from './prediction-add.component';

describe('PredictionAddComponent', () => {
  let component: PredictionAddComponent;
  let fixture: ComponentFixture<PredictionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
