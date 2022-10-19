import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.css']
})
export class InputLabelComponent implements OnInit {

  @Input() label: string ="";
  @Input() id: string ="";
  @Input() fieldControl:any;

  constructor() { }

  ngOnInit(): void {
  }

  traducir(error:any){
    //console.log(error);
    if(error.key =="required"){
      return "Valor requerido";
    }

    if(error.key =="minlength"){
      return `Largo mínimo requerido ${error.value.requiredLength}`;
    }

    if(error.key =="maxlength"){
      return `Largo máximo admitido ${error.value.requiredLength}`;
    }
    return error.defaultMessage;
  }
}
