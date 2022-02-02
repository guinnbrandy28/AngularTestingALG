// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { JokeResponse } from "./models/joke-response.model";
import { Joke } from "../jokes/models/joke.model";

@Injectable({
  providedIn: "root"
})
export class JokesService {
  private jokesUrl = "https://api.chucknorris.io/jokes/random?category=animal"; //"https://api.chucknorris.io/jokes/random";
  //TODO: add call for https://api.chucknorris.io/jokes/categories
  //and https://api.chucknorris.io/jokes/random?category={category}
  //and maybe? https://api.chucknorris.io/jokes/search?query={query}

  // constructor(private http: HttpClient) {}

  getJoke(): Observable<Joke> {
    let joke = new Joke();
    joke.content = "something so funny";
    joke.category = "Random";
    joke.title = "Random joke of the day";
    return of(joke);

    // return this.http.get<JokeResponse>(this.jokesUrl).pipe(
    //   map(function (data) {
    //     let joke = new Joke();
    //     joke.content = data.value;
    //     joke.category = "Random";
    //     joke.title = "Random joke of the day";
    //     return joke;
    //   }),
    //   catchError(this.handleError<Joke>())
    // );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
