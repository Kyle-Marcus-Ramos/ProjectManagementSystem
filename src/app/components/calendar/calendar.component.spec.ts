import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CalendarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProjectManagementSystem'`, () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProjectManagementSystem');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ProjectManagementSystem app is running!');
  });
});
