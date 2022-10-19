import { EntityBase } from "src/app/core/model/entity-base";
import { ClasificacionSocio } from "../../clasificacionSocio/services/clasificacion-socio.model";
import { Solicitud } from "../../solicitud/services/solicitud.model";
import { PeriodoCursado } from "./periodo-cursado.model";

export interface Socio extends EntityBase {

    numeroSocio: number;
    esContribuyente: boolean;
    tipoDocumento: string;
    numeroDocumento: string;
    nombres: string;
    apellidos: string;
    fechaNacimiento: Date;
    nombreConyuge: string;
    profesion: string;
    direccionTrabajo: string;
    telefonosTrabajo: string;
    direccionParticular: string;
    telefonoParticular: string;
    celular: string;
    email: string;
    grupoSanguineo: string;
    fechaIngreso: Date;
    clasificacionSocio: ClasificacionSocio
    solicitud:Solicitud;
    periodosCursados: PeriodoCursado[];  

}

