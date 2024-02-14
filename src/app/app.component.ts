import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HerosComponent } from "./heros/heros.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HerosComponent]
})
export class AppComponent {
  title = 'angular';
}
