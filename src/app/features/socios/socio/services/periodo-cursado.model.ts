import { EntityBase } from "src/app/core/model/entity-base";
import { Solicitud } from "../../solicitud/services/solicitud.model";
import { Socio } from "./socio.model";

export interface PeriodoCursado extends EntityBase {
    solicitud: Solicitud;
    socio:Socio;
    tipoPeriodo: string;
    grado: number;
    anio: number;
}