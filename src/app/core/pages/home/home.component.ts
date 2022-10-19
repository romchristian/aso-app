import { AuthService } from './../../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
