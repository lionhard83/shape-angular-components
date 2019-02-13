import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsResultsComponent } from './teams-results.component';

describe('TeamsResultsComponent', () => {
  let component: TeamsResultsComponent;
  let fixture: ComponentFixture<TeamsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
