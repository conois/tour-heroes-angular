import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
/* import { HEROES } from './mock-heroes'; */
import { HeroService } from "../hero.service";



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] 

  selectedHero:Hero 
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  /* Void mean that this function don't return a value  */
/*   onSelect(hero:Hero) : void {
    this.selectedHero = hero
  } */

  /* Asigno a la variable iniciada, los valores que estoy trayendo del servicio */
  /* Como transformé la peticion a un observable, tengo que suscribirme, de este modo queda asincrono */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
