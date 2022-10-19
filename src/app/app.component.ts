import { Component, OnInit } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.keycloak_url,
  redirectUri: environment.keycloak_redirect_uri,
  clientId: environment.keycloak_client_id,
  responseType: 'code',
  scope: 'openid profile',
  showDebugInformation: true,
  requireHttps: false,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'aso-app';

  userProfile: object = {};

  displaySidebar: boolean = true;
  items: MenuItem[] = [];
  ambiente = environment.ambiente;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Mi cuenta',
        items: [
          {
            label: 'Mi perfil',
            icon: 'pi pi-close',
            routerLink: '/core/profile',
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-close',
            command: () => {
              this.logout();
            },
          },
        ],
      },
    ];
  }

  constructor(private oauthService: OAuthService) {
    console.log('AppComponent constructor');
    this.configureCodeFlow();
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        this.loadUserProfile();
        const scopes = this.oauthService.getGrantedScopes();
        console.log(this.oauthService.getAccessToken());
      });
  }

  private configureCodeFlow() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
  }

  logout() {
    this.oauthService.revokeTokenAndLogout();
  }

  loadUserProfile(): void {
    this.oauthService.loadUserProfile().then((up: any) => {
      this.userProfile = up;
      localStorage.setItem('username', up.info.given_name);
    });
  }
}
