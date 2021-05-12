import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonControlService } from './person-control.service';
import { PersonBase } from './person.base';
import EntityData from '../assets/json/entityData.json';

@Component({
  selector: 'person-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ PersonControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() persons: PersonBase<any>[] = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private pcs: PersonControlService) {  }

  ngOnInit() {
    this.form = this.pcs.toFormGroup(this.persons);
  }

  /**
   * This method will trigger when we click on save button
   */
  onSubmit() {
    console.log(this.form);
    this.form.value.$original = this.findDifference(this.form.value, EntityData);
    this.payLoad = JSON.stringify(this.form.value);
  }

  /**
   * This method is used to find out the different values between 2 objects
   * @param obj1 object1 to compare the values
   * @param obj2 object2 to compare the values
   */
  findDifference(obj1: any, obj2: any) {
    const result: any ={};
    if (Object.is(obj1, obj2)) {
        return null;
    }
    if (!obj2 || typeof obj2 !== 'object') {
        return obj2;
    }
    Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
      if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
        result[key] = obj2[key];
      }
      if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
        const value = this.findDifference(obj1[key], obj2[key]);
        if (value !== null) {
            result[key] = value;
        }
      }
    });
    return result;
  }
}