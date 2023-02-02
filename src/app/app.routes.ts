import { RouterModule, Routes } from '@angular/router';

//& Componentes
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { Error404Component } from './componentes/error404/error404.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HomeComponent } from './componentes/home/home.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', pathMatch: 'full', redirectTo: 'error404' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
