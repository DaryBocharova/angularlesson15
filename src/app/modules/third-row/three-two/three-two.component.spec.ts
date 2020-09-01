import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTwoComponent } from './three-two.component';

describe('ThreeTwoComponent', () => {
  let component: ThreeTwoComponent;
  let fixture: ComponentFixture<ThreeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
