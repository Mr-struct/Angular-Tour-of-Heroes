import { Injectable } from "@angular/core";
import { Hero } from "./Hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  getHeroes(): Array<Hero> {
    return HEROES;
  }
}
