import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MockBuilder, MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { MyFormControlComponent } from './my-form-control/my-form-control.component';

describe('AppComponent with MockComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent, MockComponent(MyFormControlComponent)],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});

describe('AppComponent with MockBuilder', () => {
  beforeEach(() => MockBuilder(AppComponent, AppModule));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});

describe('AppComponent with MockBuilder and real formsbinding', () => {
  beforeEach(() =>
    MockBuilder(AppComponent, AppModule).keep(ReactiveFormsModule)
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.pizzaForm.patchValue({ details: '123' });
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'))
      .nativeElement as HTMLInputElement;
    expect(input.value).toEqual('123');
  });
});
