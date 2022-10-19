import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-socio-detalle',
  templateUrl: './socio-detalle.component.html',
  styleUrls: ['./socio-detalle.component.css']
})
export class SocioDetalleComponent implements OnInit {
  @Input() context: any;
  @Input() formABM!: FormGroup;

  @Input() set detallesData(data: Subject<string>) {
    this._detallesSb = data;
  }

  refDetalle: any;
  fb: FormBuilder = new FormBuilder();
  _detallesSb: Subject<any> = new Subject();

  constructor(
    public service: SocioService,
  ) { }

  ngOnInit(): void {
    if (this.context == 'create') {
      this.addDetalle();
    } else {
      this.loadDetalles();
    }
  }

  get detalles(): FormArray {
    return this.formABM.get('periodosCursados') as FormArray;
  }
  get tipoPeriodo() { return this.formABM.get('tipoPeriodo'); }
  get grado() { return this.formABM.get('grado'); }
  get anio() { return this.formABM.get('anio'); }


  loadDetalles() {
    this._detallesSb.subscribe((detallesList: any) => {
      console.log(this.detalles.controls);
      this.detalles.controls = [];

      let i = 0;

      detallesList.forEach((data: any) => {
        data.linea = i++;
        this.addDetalle();

        this.detalles.controls[data.linea].get('tipoPeriodo')?.setValue(data.tipoPeriodo);
        this.detalles.controls[data.linea].get('grado')?.setValue(data.grado);
        this.detalles.controls[data.linea].get('anio')?.setValue(data.anio);

      });

      if (detallesList.length == 0) {
        this.addDetalle();
      }
    });
  }

  initFormGroup(): FormGroup {
    return this.fb.group({
      linea: [''],
      tipoPeriodo: ['PRIMARIA', Validators.required],
      grado: [''],
      anio: [''],
    });
  }

  getMaxLinea() {
    const max =
      this.detalles.controls.length > 0
        ? Math.max(...this.detalles.controls.map((x) => x.get('linea')?.value))
        : 0;

    return max + 1;
  }

  addDetalle() {
    const group = this.initFormGroup();
    group.get('linea')?.setValue(this.getMaxLinea());


    this.detalles.push(group);
  }

  removeDetalle(detalle: FormGroup): void {
    console.log('Remove Detalles ', detalle);
    this.detalles.removeAt(this.detalles.controls.indexOf(detalle));

    if (this.detalles.controls.length == 0) {
      this.addDetalle();
    }
  }

}
