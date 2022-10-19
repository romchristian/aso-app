import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-inputtext',
  templateUrl: './form-inputtext.component.html',
  styleUrls: ['./form-inputtext.component.css']
})
export class FormInputtextComponent implements OnInit {

  @Input() id="";
  @Input() label="";

  constructor() { }

  ngOnInit(): void {
  }

}
