import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /* : Hero [] mean that this funtion return an array of Hero*/
  getHeroes(): Hero[] {
    return HEROES;
  }
}
