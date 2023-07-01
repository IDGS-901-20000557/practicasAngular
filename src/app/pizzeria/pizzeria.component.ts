import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {

  array_pizzas: Pizza[ ] = [];
  resultado!:number;
  ingredientes!:string;
  tam!:string;
  total!:number;
  nombreR!:string;
  direccionR!:string;
  telefonoR!:string;
  pizzaForm!:FormGroup;

  constructor(private readonly fb: FormBuilder){
    this.pizzaForm=this.initForm();
   }
   obtenerTotal():void{
    let suma:number=0;
    this.array_pizzas.forEach(function (value) {
      suma+=value.subtotal;
    });
    this.total=suma;
   }
   obtenerDatos():void{
    this.tam="";
    this.ingredientes="";
    if(this.pizzaForm.get('tamano')?.value=="1"){
      this.resultado=40;
      this.tam="Chica";
    }else if(this.pizzaForm.get('tamano')?.value=="2"){
      this.resultado=80;
      this.tam="Mediana";
    }else if(this.pizzaForm.get('tamano')?.value=="3"){
      this.resultado=120;
      this.tam="Grande";
    }
    if(this.pizzaForm.get('jamon')?.value==true){
      this.resultado+=10;
      this.ingredientes+=" Jamon";
    }
    if(this.pizzaForm.get('pina')?.value==true){
      this.resultado+=10;
      this.ingredientes+=" Piña";
    }
    if(this.pizzaForm.get('champi')?.value==true){
      this.resultado+=10;
      this.ingredientes+=" Champiñones";
    }
    this.resultado=this.resultado*Number(this.pizzaForm.get('numPizzas')?.value);
    this.nombreR=this.pizzaForm.get('nombre')?.value;
    this.direccionR=this.pizzaForm.get('direccion')?.value;
    this.telefonoR=this.pizzaForm.get('telefono')?.value;

    this.array_pizzas.push({
    tamano: this.tam,
    ingredientes: this.ingredientes,
    numPizzas:Number(this.pizzaForm.get('numPizzas')?.value),
    subtotal:this.resultado});
   }

   initForm():FormGroup{
    return this.fb.group({
      tamano:['', [Validators.required]],
      jamon:['', [Validators.required]],
      pina:['', [Validators.required]],
      champi:['', [Validators.required]],
      numPizzas:['', [Validators.required]],
      nombre:['', [Validators.required]],
      direccion:['', [Validators.required]],
      telefono:['', [Validators.required]]
    })
  }
}
