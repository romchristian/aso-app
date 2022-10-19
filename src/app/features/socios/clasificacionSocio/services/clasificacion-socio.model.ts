import { EntityBase } from 'src/app/core/model/entity-base';

export interface ClasificacionSocio extends EntityBase {
  codigo: string;
  nombre: string;
  descripcion: string;
}
