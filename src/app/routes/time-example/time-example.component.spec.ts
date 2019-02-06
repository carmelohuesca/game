import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeExampleComponent } from './time-example.component';

describe('TimeExampleComponent', () => {
  let component: TimeExampleComponent;
  let fixture: ComponentFixture<TimeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
