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
}
