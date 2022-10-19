import { ClasificacionSocioService } from './../../services/clasificacion-socio.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-clasificacion-socio-list',
  templateUrl: './clasificacion-socio-list.component.html',
  styleUrls: ['./clasificacion-socio-list.component.css'],
  providers: [MessageService],
})
export class ClasificacionSocioListComponent implements OnInit {
  constructor(public service: ClasificacionSocioService) {}

  ngOnInit(): void {}
  cols = [
    { field: 'codigo', header: 'Código', type: 'string', filter: true },
    { field: 'nombre', header: 'Nombre', type: 'string', filter: true },
    {
      field: 'descripcion',
      header: 'Descripcion',
      type: 'string',
      filter: false,
    },
  ];
}
