import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/clases/heroe';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string = '';
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      //console.log(this.heroes);
    });
  }
}
