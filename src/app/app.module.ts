import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaDosPuntosModuleModule } from './distanciaDosPuntos/distancia-dos-puntos-module/distancia-dos-puntos-module.module';
import { ResistenciasComponent } from './resistencias/resistencias/resistencias.component';
import { ResistenciasModuleModule } from './resistencias/resistencias-module/resistencias-module.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzeriaComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaDosPuntosModuleModule,
    ResistenciasModuleModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
