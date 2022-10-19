import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('AuthGuard#canActivate called');
    console.log('data', route.data);
    if (this.authService.checkLogin() && route.data['roles']) {
      console.log('route.data[roles]', route.data['roles']);
      console.log('hasRole', this.authService.hasRole(route.data['roles']));
      if (this.authService.hasRole(route.data['roles'])) {
        return true;
      } else {
        this.router.navigate(['/core/access-denied']);
        return false;
      }
    }

    //this.router.navigate(['/home']);
    return true;
  }
}
