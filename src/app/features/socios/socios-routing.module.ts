import { HomeSociosComponent } from './home/home-socios/home-socios.component';
import { ClasificacionSocioCardComponent } from './clasificacionSocio/pages/clasificacion-socio-card/clasificacion-socio-card.component';
import { ClasificacionSocioListComponent } from './clasificacionSocio/pages/clasificacion-socio-list/clasificacion-socio-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { TipoDocumentoListComponent } from './tipoDocumento/pages/tipo-documento-list/tipo-documento-list.component';
import { TipoDocumentoCardComponent } from './tipoDocumento/pages/tipo-documento-card/tipo-documento-card.component';
import { SocioListComponent } from './socio/pages/socio-list/socio-list.component';
import { SocioCardComponent } from './socio/pages/socio-card/socio-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeSociosComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'clasificacionesSocios',
    component: ClasificacionSocioListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['CLASIFICACION_SOCIO_READ'],
    },
  },
  {
    path: 'clasificacionesSocios/:id',
    component: ClasificacionSocioCardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['CLASIFICACION_SOCIO_READ'],
    },
  },
  {
    path: 'tipoDocumentos',
    component: TipoDocumentoListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['TIPO_DOCUMENTO_READ'],
    },
  },
  {
    path: 'tipoDocumentos/:id',
    component: TipoDocumentoCardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['TIPO_DOCUMENTO_READ'],
    },
  },
  {
    path: 'socios',
    component: SocioListComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['SOCIO_READ'],
    },
  },
  {
    path: 'socios/:id',
    component: SocioCardComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['SOCIO_READ'],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SociosRoutingModule {}
