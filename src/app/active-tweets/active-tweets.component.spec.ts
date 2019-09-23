import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTweetsComponent } from './active-tweets.component';

describe('ActiveTweetsComponent', () => {
  let component: ActiveTweetsComponent;
  let fixture: ComponentFixture<ActiveTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
