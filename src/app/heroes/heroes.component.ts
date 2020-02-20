// Always import the component symbol from the angular core library
import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';

// This heroService.getgetHeroes method now returns an Observable<Hero[]>
// so we have to adjust it here.
import { HeroService } from '../hero.service';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Always export the class so you can import it elsewhere
export class HeroesComponent implements OnInit {

  // Defining a component property to expose the HEROES array we are importing
  // but will eventually get from a database
  selectedHero: Hero;
  heroes: Hero[];

  // We now changed the previously stored string to an object whose interface is exported
  // hero: Hero = {
    // id: 1,
    // name: "yR"
  // }; 

  // This parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messagesService: MessagesService) { }

  // Anfular calls on the init function shortly after creating a component
  // and this is a good place to put any initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  // This triggers when the onclick event is fired on one of the list elements
  // and sets the selectedHero to whichever li was clicked on
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add("HeroService: Selected hero id=$(hero.id)");
  }

  // This .subscribe() method passes the emitted array to the callback and sets the component's heroes propterty
  // in an asynchronous manner; making requests to a remote server and ensuring smooth UI/page element loading 
  // works best asynchronously. 
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
