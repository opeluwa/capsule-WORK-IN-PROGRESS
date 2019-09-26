import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTweetItemComponent } from './active-tweet-item.component';

describe('ActiveTweetItemComponent', () => {
  let component: ActiveTweetItemComponent;
  let fixture: ComponentFixture<ActiveTweetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTweetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTweetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
