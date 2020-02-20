// Need angular core to include Input as well becayse external hero component will bind to our selectedHero
import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // the hero property must be an Input property that is annotated with the @Input() decorator because the external heroes component will bind to it
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
