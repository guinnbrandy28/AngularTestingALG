import { Component, OnInit } from "@angular/core";
import { JokesService } from "../jokes/jokes.service";
import { Joke } from "../jokes/models/joke.model";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html"
})
export class JokesComponent implements OnInit {
  jokes: Array<Joke> = new Array<Joke>();
  message: string = "";
  title: string = "";

  constructor(private jokesService: JokesService) {}

  setJoke(jokes: Joke[]): void {
    this.jokesService.getJoke().subscribe((data) => {
      jokes.push(data);
      //console.log("data", data);
    });
  }

  ngOnInit(): void {
    this.title = "Get your laugh on!!";
    this.message = "Lighten and brighten up your day with a Chuck Noris joke.";
    let joke = new Joke();
    joke.content = "fake joke";
    joke.category = "fake category";
    joke.title = "fake title";
    console.log("joke", joke);
    this.jokes.push(joke);
    console.log("jokes", this.jokes);

    this.setJoke(this.jokes);
  }
}
