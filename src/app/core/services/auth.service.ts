import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {}

  hasRole(requiredRoles: string[]) {
    return requiredRoles.some((role) => this.roles.includes(role));
  }

  get access_token() {
    return this.oauthService.getAccessToken();
  }

  get givenName() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get familyName() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['family_name'];
  }

  get email() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['email'];
  }

  get roles() {
    let claims: any = this.oauthService.getIdentityClaims();

    if (!claims) return null;
    let jwt = this.parseJwt(this.oauthService.getAccessToken());
    console.log(jwt);
    return jwt['resource_access'][`${environment.keycloak_client_id}`]['roles'];
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  checkLogin() {
    return this.oauthService.hasValidAccessToken();
  }
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}
