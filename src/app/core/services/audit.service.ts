import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditService {
  entity: any = {};
  $currentAudit = new BehaviorSubject({});
  constructor() {}
}
