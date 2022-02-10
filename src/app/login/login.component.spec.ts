import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it(`should have as title 'my-college-project'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login.title).toEqual('ReactiveformDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-college-project app is running!');
  });
});
