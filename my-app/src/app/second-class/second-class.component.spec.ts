import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondClassComponent } from './second-class.component';

describe('SecondClassComponent', () => {
  let component: SecondClassComponent;
  let fixture: ComponentFixture<SecondClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
