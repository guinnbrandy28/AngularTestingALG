import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { JokesComponent } from "./jokes.component";

@NgModule({
  declarations: [JokesComponent],
  imports: [CommonModule],
  exports: [JokesComponent]
})
export class JokesModule {}
