import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesService } from './servicios/heroes.service';

import { AppComponent } from './app.component';

//% RUTAS
import { APP_ROUTING } from './app.routes';

//! COMPONENTES
import { HomeComponent } from './componentes/home/home.component';
import { Error404Component } from './componentes/error404/error404.component';
import { HeroeTarjetaComponent } from './componentes/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Error404Component, HeroeTarjetaComponent, HeroesComponent, HeroeComponent, BuscadorComponent],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
