import { ComponentFixture } from '@angular/core/testing';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-numero-fiscal',
  templateUrl: './numero-fiscal.component.html',
  styleUrls: ['./numero-fiscal.component.css'],
})
export class NumeroFiscalComponent implements OnInit {
  @Input() context: String = 'view';
  @Input() formABM!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get puntoExpedicion() {
    return this.formABM.get('puntoExpedicion');
  }
  get establecimiento() {
    return this.formABM.get('establecimiento');
  }
  get numeroSecuencial() {
    return this.formABM.get('numeroSecuencial');
  }

  onEstChange(event: any) {
    this.establecimiento?.setValue(this.fillWithZeros(event.target.value, 3));
  }

  onPExpChange(event: any) {
    this.puntoExpedicion?.setValue(this.fillWithZeros(event.target.value, 3));
  }

  onSecuencialChange(event: any) {
    this.numeroSecuencial?.setValue(this.fillWithZeros(event.target.value, 7));
  }

  fillWithZeros(value: String, cantZeros: any): String {
    let result: String = value;
    let cant: Number = cantZeros - value.length;

    for (let i = 0; i < cant; i++) {
      result = '0' + result;
    }
    return result;
  }
}
