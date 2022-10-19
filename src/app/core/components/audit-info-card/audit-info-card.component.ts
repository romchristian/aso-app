import { AuditService } from './../../services/audit.service';
import { EntityBase } from './../../model/entity-base';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-audit-info-card',
  templateUrl: './audit-info-card.component.html',
  styleUrls: ['./audit-info-card.component.css'],
})
export class AuditInfoCardComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  $auditSubcription: any;

  constructor(public auditService: AuditService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.$auditSubcription = this.auditService.$currentAudit.subscribe(
      (entity: any) => {
        this.auditService.entity = entity;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.$auditSubcription) {
      this.$auditSubcription.unsubscribe();
    }
  }
}
