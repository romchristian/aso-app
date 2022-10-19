import { EntityBase } from "src/app/core/model/entity-base";

export interface TipoDocumento extends EntityBase {
    codigo: string;
    nombre: string;
    descripcion: string;
  }
  