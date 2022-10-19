import { BlocDocumentoService } from './bloc-documento.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fc-totales',
  templateUrl: './fc-totales.component.html',
  styleUrls: ['./fc-totales.component.css'],
})
export class FcTotalesComponent implements OnInit, OnDestroy {
  @Input() formABM!: FormGroup;
  $calculaTotalesSubscription: any;
  mostrarMasTotales: boolean = false;

  constructor(private blocDocumento: BlocDocumentoService) {}

  ngOnInit(): void {
    this.$calculaTotalesSubscription =
      this.blocDocumento.$calculaTotales.subscribe((detalles: any) => {
        this.calculaTotales(detalles);
      });
  }

  ngOnDestroy(): void {
    if (this.$calculaTotalesSubscription) {
      this.$calculaTotalesSubscription.unsubscribe();
    }
    this.blocDocumento.clear();
  }

  get total() {
    return this.formABM.get('total');
  }
  get subTotal() {
    return this.formABM.get('subTotal');
  }

  get totalDescuento() {
    return this.formABM.get('totalDescuento');
  }
  get totalGravada5() {
    return this.formABM.get('totalGravada5');
  }
  get totalGravada10() {
    return this.formABM.get('totalGravada10');
  }
  get totalGravada() {
    return this.formABM.get('totalGravada');
  }
  get totalIva5() {
    return this.formABM.get('totalIva5');
  }
  get totalIva10() {
    return this.formABM.get('totalIva10');
  }
  get totalIva() {
    return this.formABM.get('totalIva');
  }
  get totalExento() {
    return this.formABM.get('totalExento');
  }

  calculaTotales(detalles: any) {
    let totalIva5 = 0;
    let totalIva10 = 0;
    let totalIva = 0;
    let totalExento = 0;
    let totalGravada5 = 0;
    let totalGravada10 = 0;
    let totalGravada = 0;
    let totalDescuento = 0;
    let subTotal = 0;
    let total = 0;

    detalles?.forEach((detalle: any) => {
      const porcentajeImpuesto = detalle.impuesto?.porcentaje;
      if (porcentajeImpuesto === 0) {
        totalExento += detalle.totalLinea;
      }
      if (porcentajeImpuesto === 5) {
        totalGravada5 += detalle.totalLinea;
      }
      if (porcentajeImpuesto === 10) {
        totalGravada10 += detalle.totalLinea;
      }

      totalDescuento += detalle.importeDescuento;
      subTotal += detalle.cantidad * detalle.precioUnitario;
      total += detalle.totalLinea;
    });

    totalIva5 = totalGravada5 / 21;
    totalIva10 = totalGravada10 / 11;
    totalIva = totalIva5 + totalIva10;

    totalGravada5 = totalGravada5 - totalIva5;
    totalGravada10 = totalGravada10 - totalIva10;
    totalGravada = totalGravada5 + totalGravada10;

    this.totalExento?.setValue(totalExento);
    this.totalIva5?.setValue(totalIva5);
    this.totalIva10?.setValue(totalIva10);
    this.totalIva?.setValue(totalIva);
    this.totalGravada5?.setValue(totalGravada5);
    this.totalGravada10?.setValue(totalGravada10);
    this.totalGravada?.setValue(totalGravada);
    this.totalDescuento?.setValue(totalDescuento);
    this.subTotal?.setValue(subTotal);
    this.total?.setValue(total);
  }
}
