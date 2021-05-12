import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonBase } from './person.base';

@Component({
  selector: 'app-person',
  templateUrl: './dynamic-form-person.component.html'
})
export class DynamicFormPersonComponent {
  @Input()
  person!: PersonBase<any>;
  @Input()
  form!: FormGroup;
  get isValid() {
    return this.form.controls[this.person.key].valid;
  }
}