import { Component, OnInit } from '@angular/core';
import { Hero } from "../heroes/hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from "../hero.service";


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero
  constructor(
    private heroServices:HeroService, 
    private route: ActivatedRoute, 
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getHero()
  }

  getHero():void {
    const id = +this.route.snapshot.paramMap.get('id')
    /* const id=this.route.params.id */
    this.heroServices.getHero(id).subscribe(heroe => this.hero = heroe)
  }

  goBack(): void {
    this.location.back();
  }


}
