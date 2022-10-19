import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SocioService } from '../../services/socio.service';

@Component({
  selector: 'app-socio-list',
  templateUrl: './socio-list.component.html',
  styleUrls: ['./socio-list.component.css'],
  providers:[MessageService]
})
export class SocioListComponent implements OnInit {

  constructor(
    public service:SocioService
  ) { }

  ngOnInit(): void {
  }
  cols= [
    { field: 'numeroSocio', header: 'Nombres', type: 'string', filter: true },
    { field: 'esContribuyente', header: 'Contribuyente', type: 'boolean', filter: false },
    { field: 'nombres', header: 'Nombres', type: 'string', filter: false },
    { field: 'apellidos', header: 'Apellidos', type: 'string', filter: false },
    { field: 'profesion', header: 'Profesion', type: 'string', filter: false },
  ]

}
