import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { JokesModule } from "./jokes/jokes.module";
import { JokesService } from "./jokes/jokes.service";


describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [JokesModule],
      providers: [
        JokesService
      ]

    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codesandbox-angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("codesandbox-angular-testing");
  });

  it("should render link containing the words", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("a").textContent).toContain("is so fun");
  });

  it("should render link matching the exact words", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("a").textContent).toBeTruthy(
      "Angular testing is so fun, right?"
    );
  });

  it("should render a joke component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const jokes = compiled.querySelector("app-jokes");
    expect(jokes).not.toBeNull();
    expect(jokes).toBeDefined();
  });

  it("should render a title in the joke component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //console.log(compiled.querySelector("[data-joke-title]"));
    const text = compiled.querySelector("[data-joke-title]").textContent;
    expect(text).toContain(
      "Get your laugh on!!"
    );
  });

  it("should render 2 jokes in the joke component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelectorAll("[data-joke-container]"));
    const jokes = compiled.querySelectorAll("[data-joke-container]");
    expect(jokes.length).toEqual(2);
  });
});
