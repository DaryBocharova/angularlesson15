import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveThreeComponent } from './five-three.component';

describe('FiveThreeComponent', () => {
  let component: FiveThreeComponent;
  let fixture: ComponentFixture<FiveThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
