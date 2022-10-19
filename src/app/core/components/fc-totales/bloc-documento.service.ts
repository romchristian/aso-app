import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlocDocumentoService {
  $calculaTotales = new BehaviorSubject<any>(null);
  constructor() {}

  onImporteBlur(formGroupDetalle: any, detalles: any) {
    const cantidad = formGroupDetalle.get('cantidad')?.value;
    const precioUnitario = formGroupDetalle.get('precioUnitario')?.value;
    const porcentajeDescuento = formGroupDetalle.get(
      'porcentajeDescuento'
    )?.value;
    //set importeDescuento from porcentajeDescuento
    formGroupDetalle
      .get('importeDescuento')
      ?.setValue(precioUnitario * cantidad * (porcentajeDescuento / 100));
    const importeDescuento = formGroupDetalle.get('importeDescuento')?.value;

    //set totalLinea from precioUnitario * cantidad - importeDescuento
    formGroupDetalle
      .get('totalLinea')
      ?.setValue(precioUnitario * cantidad - importeDescuento);      

    this.calculaTotales(detalles);
  }

  calculaTotales(detalles: any) {
    this.$calculaTotales.next(detalles);
  }
  clear(){
    this.$calculaTotales.next(null);
  }
}
