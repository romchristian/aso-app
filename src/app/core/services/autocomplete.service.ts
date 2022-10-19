import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor() { }

  getService(entity:string):any{
    /*switch(entity){
      case 'marca':
        return this.marca;
      case 'modelo':
        return this.modelo;
      default:
        return null;
    }*/
  }

  findAll(entity:string, search:string):any{
    return this.getService(entity).findAll(search);
  }
}
