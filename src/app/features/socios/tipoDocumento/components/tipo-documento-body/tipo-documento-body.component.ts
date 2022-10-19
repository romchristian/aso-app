import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TipoDocumentoService } from '../../services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-body',
  templateUrl: './tipo-documento-body.component.html',
  styleUrls: ['./tipo-documento-body.component.css']
})
export class TipoDocumentoBodyComponent implements OnInit {

  @Input() context: String = 'view';
  @Input() formABM!: FormGroup;

  constructor(public service: TipoDocumentoService) {}

  ngOnInit(): void {}
 
  get nombre() {
    return this.formABM.get('nombre');
  }

}
