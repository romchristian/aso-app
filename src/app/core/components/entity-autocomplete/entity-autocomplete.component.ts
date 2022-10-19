import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor,  NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { take } from 'rxjs';
import { AutocompleteService } from '../../services/autocomplete.service';


@Component({
  selector: 'app-entity-autocomplete',
  templateUrl: './entity-autocomplete.component.html',
  styleUrls: ['./entity-autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: EntityAutoCompleteComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EntityAutoCompleteComponent
    }
  ]
})
export class EntityAutoCompleteComponent implements OnInit,  ControlValueAccessor, Validator {

  @Input() id = "";
  @Input() readonly = false;
  @Input() entity: string = "";
  @Output() onSelected = new EventEmitter();
  selected:any;


  data = [];
  touched = false;
  onTouched = () => {};
  onChange = (selected:any) => {};
  disabled = false;



  queryParams:any = {
    page: 0,
    size: 20,
    sort: 'nombre',
    nombre: '',
  };

  constructor(private service: AutocompleteService) { }



  ngOnInit(): void {
    this.load();
  }


  search(event:any) {
    this.markAsTouched();
   let query = event.query;
   this.queryParams.nombre = query;
   this.load();
  }

  load(){

    this.service.findAll(this.entity,this.queryParams)
      .pipe(take(1))
      .subscribe(  (data:any) => {
        this.data = data.content;
      }
    );
  }

  onSelect(event:any){
    console.log(event);
    this.onChange(event);
  }

  onUnselect(event:any){
    this.selected = null;
    this.onChange(null);
  }

  onClear(event:any){
    this.selected = null;
    this.onChange(null);
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return null;
  }

  writeValue(obj: any): void {
    this.selected = obj;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
