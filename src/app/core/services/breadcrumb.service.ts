import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  UrlSegment,
} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  // Subject emitting the breadcrumb hierarchy
  private readonly _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);

  // Observable exposing the breadcrumb hierarchy
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        // Construct the breadcrumb hierarchy
        const url = this.router.routerState.snapshot.url;
        let breadcrumbs: MenuItem[] = [];
        this.addBreadcrumb(url, breadcrumbs);
        this._breadcrumbs$.next(breadcrumbs);
      });
  }
  private addBreadcrumb(route: string, breadcrumbs: MenuItem[]) {
    if (route) {
      // Construct the route URL
      let urlDynamics = '';
      let menus: MenuItem[] = route
        .split('/')
        .filter((urlSegment) => urlSegment.length > 2)
        .map((urlSegment) => {
          if (urlSegment.length > 2 && !urlSegment.includes('?')) {
            urlDynamics += '/' + urlSegment;
            return {
              label: urlSegment,
              url: urlDynamics,
            };
          }

          return {
            label: 'home',
            url: '/',
          };
        });

      // Add the route URL to the breadcrumb menu
      breadcrumbs.push(...menus);
    }
  }
}
