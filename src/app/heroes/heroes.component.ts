// Always import the component symbol from the angular core library
import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the class so you can import it elsewhere
export class HeroesComponent implements OnInit {

  // We now changed the previously stored string to an object whose interface is exported
  hero: Hero = {
    id: 1,
    name: "yR"
  }; 

  constructor() { }

  // Anfular calls on the init function shortly after creating a component
  // and this is a good place to put any initialization logic
  ngOnInit(): void {
  }

}
