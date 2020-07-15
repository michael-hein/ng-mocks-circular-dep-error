import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormControlComponent } from './my-form-control.component';

describe('MyFormControlComponent', () => {
  let component: MyFormControlComponent;
  let fixture: ComponentFixture<MyFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
