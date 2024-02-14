import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {HEROES} from '../mock-heroes';
import {

  NgFor,
 
} from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
    selector: 'app-heros',
    standalone: true,
    templateUrl: './heros.component.html',
    styleUrl: './heros.component.scss',
    imports: [CommonModule, FormsModule, NgFor, NgIf, HeroDetailComponent]
})
export class HerosComponent {
  Hero = HEROES ;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
