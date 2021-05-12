import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonBase } from './person.base';

@Injectable()
export class PersonControlService {
  constructor() {}

  /**
   * This method is used to create a form group using dynamic data
   * @param persons persons object with type
   */
  toFormGroup(persons: PersonBase<any>[]) {
    let group: any = {};
    persons.forEach(person => {
      group[person.key] = person.required
        ? new FormControl(person.value || '', Validators.required)
        : new FormControl(person.value || '');
    });
    return new FormGroup(group);
  }
}