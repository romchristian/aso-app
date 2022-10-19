import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SociosRoutingModule } from './socios-routing.module';
import { HomeSociosComponent } from './home/home-socios/home-socios.component';
import { ClasificacionSocioBodyComponent } from './clasificacionSocio/components/clasificacion-socio-body/clasificacion-socio-body.component';
import { ClasificacionSocioListComponent } from './clasificacionSocio/pages/clasificacion-socio-list/clasificacion-socio-list.component';
import { ClasificacionSocioCardComponent } from './clasificacionSocio/pages/clasificacion-socio-card/clasificacion-socio-card.component';
import { TipoDocumentoBodyComponent } from './tipoDocumento/components/tipo-documento-body/tipo-documento-body.component';
import { TipoDocumentoCardComponent } from './tipoDocumento/pages/tipo-documento-card/tipo-documento-card.component';
import { TipoDocumentoListComponent } from './tipoDocumento/pages/tipo-documento-list/tipo-documento-list.component';
import { SocioCardComponent } from './socio/pages/socio-card/socio-card.component';
import { SocioListComponent } from './socio/pages/socio-list/socio-list.component';
import { SocioBodyComponent } from './socio/components/socio-body/socio-body.component';
import { SocioDetalleComponent } from './socio/components/socio-detalle/socio-detalle.component';

@NgModule({
  declarations: [
    HomeSociosComponent,
    ClasificacionSocioBodyComponent,
    ClasificacionSocioListComponent,
    ClasificacionSocioCardComponent,
    TipoDocumentoBodyComponent,
    TipoDocumentoCardComponent,
    TipoDocumentoListComponent,
    SocioCardComponent,
    SocioListComponent,
    SocioBodyComponent,
    SocioDetalleComponent],
  imports: [
    CommonModule,
    SociosRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SociosModule { }
