import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { DistanciaDosPuntosComponent } from '../distancia-dos-puntos/distancia-dos-puntos.component';


@NgModule({
  declarations: [
    DistanciaDosPuntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports:[
    DistanciaDosPuntosComponent
  ]
})
export class DistanciaDosPuntosModuleModule { }
