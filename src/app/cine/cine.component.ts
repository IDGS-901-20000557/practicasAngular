import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  cineForm!:FormGroup;
  resultado:String="";
  total:number=0;

  obtenerDatos():void{
    let opera =Number(this.cineForm.get('cantidadB')?.value)/Number(this.cineForm.get('cantidad')?.value);
    console.log(opera)
    console.log(Number(this.cineForm.get('cantidadB')?.value))
    console.log(Number(this.cineForm.get('cantidad')?.value))
    this.total=12*Number(this.cineForm.get('cantidadB')?.value);
    if(this.cineForm.get('tarjeta')?.value=="1"){
      this.total=this.total*0.9;
    }
    if(opera>7){
      this.resultado="Solo se pueden comprar 7 boletos por persona.";
    }else if(opera>=5){
      this.total=this.total*0.85;
      this.resultado="El total de pagar de: "+String(this.cineForm.get('nombre')?.value)+", es de: $"+String(this.total);
    }else if(opera>2){
      this.total=this.total*0.90;
      this.resultado="El total de pagar de: "+String(this.cineForm.get('nombre')?.value)+", es de: $"+String(this.total);
    }else{
      this.resultado="El total de pagar de: "+String(this.cineForm.get('nombre')?.value)+", es de: $"+String(this.total);
    }
  }

  constructor(private readonly fb: FormBuilder){
    this.cineForm=this.initForm();
   }

   initForm():FormGroup{
    return this.fb.group({
      nombre:['', [Validators.required]],
      cantidad:['', [Validators.required]],
      tarjeta:['', [Validators.required]],
      cantidadB:['', [Validators.required]]
    })
  }
}
