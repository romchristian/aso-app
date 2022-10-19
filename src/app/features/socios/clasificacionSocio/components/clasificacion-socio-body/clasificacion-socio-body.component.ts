import { ClasificacionSocioService } from './../../services/clasificacion-socio.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clasificacion-socio-body',
  templateUrl: './clasificacion-socio-body.component.html',
  styleUrls: ['./clasificacion-socio-body.component.css'],
})
export class ClasificacionSocioBodyComponent implements OnInit {
  @Input() context: String = 'view';
  @Input() formABM!: FormGroup;

  constructor(public service: ClasificacionSocioService) {}

  ngOnInit(): void {}

  get codigo() {
    return this.formABM.get('codigo');
  }

  get nombre() {
    return this.formABM.get('nombre');
  }

  get descripcion() {
    return this.formABM.get('descripcion');
  }
}
