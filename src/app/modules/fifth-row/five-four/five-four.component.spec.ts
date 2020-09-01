import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveFourComponent } from './five-four.component';

describe('FiveFourComponent', () => {
  let component: FiveFourComponent;
  let fixture: ComponentFixture<FiveFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
