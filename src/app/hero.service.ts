import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServices: MessageService) { }

  /* : Hero [] mean that this funtion return an array of Hero*/
  getHeroes(): Observable<Hero[]> {
    this.messageServices.add("HeroService: fetched heroes")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageServices.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
