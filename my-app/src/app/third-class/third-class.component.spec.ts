import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdClassComponent } from './third-class.component';

describe('ThirdClassComponent', () => {
  let component: ThirdClassComponent;
  let fixture: ComponentFixture<ThirdClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
