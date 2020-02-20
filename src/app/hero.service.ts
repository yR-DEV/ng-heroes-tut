// Services are a great way to share information among classes that don't know eachother
// This message services will be injected into two places:
//     1. Into HeroService which uses the service to send a message
//     2. Into MessagesComponent which displays the message and displays the ID when the user clicks a hero
import { Injectable } from '@angular/core';

// The observable is one of the key classes on the rxjs library. 
// Angular's HTTP Client methods return RxJS Observables. 
// Here we are just going to simulate getting data from a server with the RxJS of() function.
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
