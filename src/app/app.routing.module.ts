import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ResistenciasComponent } from './resistencias/resistencias/resistencias.component';
import { DistanciaDosPuntosComponent } from './distanciaDosPuntos/distancia-dos-puntos/distancia-dos-puntos.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { CineComponent } from './cine/cine.component';
// import { IricComponent } from './grupos/iric/iric.component';
// import { OperasBasComponent } from './grupos/formularios/operas-bas/operas-bas.component';
// import { HomeComponent } from './home/home.component';

const routes:Routes=[
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'resistencias', component: ResistenciasComponent },
{path: 'distancia', component: DistanciaDosPuntosComponent },
{path: 'pizzeria', component: PizzeriaComponent },
{path: 'cine', component: CineComponent },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
