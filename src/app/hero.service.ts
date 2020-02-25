// Services are a great way to share information among classes that don't know eachother
// This message services will be injected into two places:
//     1. Into HeroService which uses the service to send a message
//     2. Into MessagesComponent which displays the message and displays the ID when the user clicks a hero
import { Injectable } from '@angular/core';

// The observable is one of the key classes on the rxjs library. 
// Angular's HTTP Client methods return RxJS Observables. 
// Here we are just going to simulate getting data from a server with the RxJS of() function.
import { Observable, of } from 'rxjs';

import { MessagesService } from './messages.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Adding this to the constructor ensures Angular injects the singleton MessagesService into that property
  // when it creates the HeroService.
  // This is also called a 'typical Service-In-Service senario' when one service is injected into the other.
  constructor(private messagesService: MessagesService) { }

  // The of(HEROES) returns an Observable<Hero[]> that emits A SINGLE VALUE
  // that is the array of mock heroes. 
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
