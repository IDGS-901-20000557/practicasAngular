import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css'],
})
export class ResistenciasComponent {
  valorBanda1!:string;
  valorBanda2!:string;
  valorBanda3!:string;
  valorBanda4!:string;
  valorResistencia!: number;
  maxValor!: number;
  minValor!: number;
  numeroTotal!: string;
  colorResistencia1!:string;
  colorResistencia2!:string;
  colorResistencia3!:string;
  colorResistencia4!:string;

   coloresBandaMult: {[key: string]: string} = {
    "1": "black",
    "10": "brown",
    "100": "red",
    "1000": "orange",
    "10000": "yellow",
    "100000": "green",
    "1000000": "blue",
    "10000000": "purple",
    "100000000": "grey",
    "1000000000": "white"
  };

  coloresBanda: {[key: string]: string} = {
    "0": "black",
    "1": "brown",
    "2": "red",
    "3": "orange",
    "4": "yellow",
    "5": "green",
    "6": "blue",
    "7": "purple",
    "8": "grey",
    "9": "white"
  };


  calcularValor() {
    this.numeroTotal=this.valorBanda1+this.valorBanda2;
    this.valorResistencia=Number(this.numeroTotal)*Number(this.valorBanda3);

    if (Number(this.valorBanda4)===1){
      this.maxValor=this.valorResistencia*1.05;
      this.minValor=this.valorResistencia-(this.valorResistencia*.05);
      this.colorResistencia4='gold';
    }else if(Number(this.valorBanda4)===2){
      this.maxValor=this.valorResistencia*1.10;
      this.minValor=this.valorResistencia-(this.valorResistencia*.10);
      this.colorResistencia4='silver';
    }
    Object.keys(this.coloresBanda).forEach((key) => {
      if(key===this.valorBanda1){
        this.colorResistencia1=this.coloresBanda[key];
      }
      if(key===this.valorBanda2){
        this.colorResistencia2=this.coloresBanda[key];
      }
    });
    Object.keys(this.coloresBandaMult).forEach((key) => {
      if(key===this.valorBanda3){
        this.colorResistencia3=this.coloresBandaMult[key];
      }
    });
  }
}
