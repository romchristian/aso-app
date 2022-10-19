import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardpageService {
  $context: BehaviorSubject<string> = new BehaviorSubject<string>('create');

  constructor() {}
}
