import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  watched = [new Movie('Baghban', 'drama', 2001),
    new Movie('Home Alone', 'drama', 2006)];

  toWatch = [new Movie('Jumanji', 'drama', 2019),
    new Movie('Frozen2', 'drama', 2019)]

}
