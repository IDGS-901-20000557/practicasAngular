import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaDosPuntosModuleModule } from './distanciaDosPuntos/distancia-dos-puntos-module/distancia-dos-puntos-module.module';
import { ResistenciasComponent } from './resistencias/resistencias/resistencias.component';
import { ResistenciasModuleModule } from './resistencias/resistencias-module/resistencias-module.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DistanciaDosPuntosModuleModule,
    ResistenciasModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
