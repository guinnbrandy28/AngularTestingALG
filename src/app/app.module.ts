import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyInterceptor } from "./utility.httpInterceptor";

import { AppComponent } from "./app.component";
import { JokesModule } from "./jokes/jokes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, JokesModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
