import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia-dos-puntos',
  templateUrl: './distancia-dos-puntos.component.html',
  styleUrls: ['./distancia-dos-puntos.component.css']
})
export class DistanciaDosPuntosComponent {
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:number;
  calcular(){
    this.resultado=Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2));
  }
}
