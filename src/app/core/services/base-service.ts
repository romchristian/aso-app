import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TransformDate2 } from '../decorators/date-converter';
import { TransformDateToString } from '../decorators/date-converter1';
import { Page } from '../model/page';
import { formatQueryParams } from '../util/util-params';

export abstract class BaseService<T> {
  http: HttpClient;
  authService: AuthService;

  field = this.getAutoCompleteField();
  suggestions = [];

  permisos = {
    create: false,
    update: false,
    delete: false,
    read: false,
  };

  queryParams: any = {
    page: 0,
    size: 30,
    //TODO: falta verificar. sort: this.getAutoCompleteField(),
  };

  constructor(http: HttpClient, authService: AuthService) {
    this.http = http;
    this.authService = authService;
    this.permisos = {
      create: this.authService.hasRole([`${this.getRolePrefix()}_CREATE`]),
      update: this.authService.hasRole([`${this.getRolePrefix()}_UPDATE`]),
      delete: this.authService.hasRole([`${this.getRolePrefix()}_DELETE`]),
      read: this.authService.hasRole([`${this.getRolePrefix()}_READ`]),
    };
  }

  findAll(params: any) {
    params = formatQueryParams({
      ...this.queryParams,
      ...params,
    });

    console.log(params);

    return this.http.get<Page<T>>(`${this.getUrlBase()}`, { params: params });
  }

  findById(id: string) {
    return this.http.get<T>(`${this.getUrlBase()}/${id}`);
  }

  put(id: string, body: T) {
    console.log('PUT RESQUEST');
    console.log(body);
    let url = `${this.getUrlBase()}/${id}`;
    console.log(url);
    return this.http.put<T>(url, body);
  }

  post(body: T) {
    console.log('POST RESQUEST');
    console.log(body);
    return this.http.post<T>(`${this.getUrlBase()}`, body);
  }

  delete(id: string) {
    return this.http.delete<string>(`${this.getUrlBase()}/${id}`);
  }

  getUrlBase() {
    return `${environment.base_url}/${this.getRoute()}`;
  }

  search(event: any) {
    let query = event.query;
    this.queryParams[this.getAutoCompleteField()] = query;
    this.load();
  }

  load() {
    this.findAll(this.queryParams)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.suggestions = data.content;
      });
  }

  abstract getRoute(): string;
  abstract getAutoCompleteField(): string;
  abstract getRolePrefix(): string;
}
