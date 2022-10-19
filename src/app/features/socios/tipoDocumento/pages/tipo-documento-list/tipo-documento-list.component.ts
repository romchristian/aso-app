import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TipoDocumentoService } from '../../services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-list',
  templateUrl: './tipo-documento-list.component.html',
  styleUrls: ['./tipo-documento-list.component.css'],
  providers: [MessageService],
})
export class TipoDocumentoListComponent implements OnInit {

  constructor(
    public service: TipoDocumentoService,
  ) { }

  ngOnInit(): void {
  }
  cols= [
    { field: 'nombre', header: 'Nombre', type: 'string', filter: true },
  ]

}
