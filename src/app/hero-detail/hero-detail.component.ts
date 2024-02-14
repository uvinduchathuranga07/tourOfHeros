import {Component, Input} from '@angular/core';
import {Hero} from '../hero';
import {CommonModule, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
 
  @Input() hero?: Hero;
}
