import { Injectable } from '@angular/core';
import EntityMeta from '../assets/json/entityMeta.json';
import EntityData from '../assets/json/entityData.json';
import { Textbox } from './textbox';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private datePipe: DatePipe
  ) { }

  /**
   * This method is used to get the person details to build a form with data
   */
  getPersons() {
    const personDate = EntityMeta.field.map(field => {
      return new Textbox({
        key: field.name,
        label: field.label,
        type: this.getDataType(field.dataType),
        value: this.getEntityValueByName(field.name, field.dataType),
        required: field.required || false,
        readOnly: field.readOnly || false,
        length: field.length || null,
        fractionDigits: field.fractionDigits ? this.setFractionDigits(field.fractionDigits) : null
      });
    });
    return personDate;
  }

  /**
   * This method is used to find and update the type of input field
   * @param type data type of the input field
   */
  getDataType(type: string) {
    if (type === 'Decimal' || type === 'Integer') return 'number';
    if (type === 'email') return 'email';
    if (type === 'Date') return 'date';
    return 'text';
  }

  /**
   * This method is used to findout and prepulate the data in fields
   * @param key key to check the corresponding object
   * @param date to pass the data type of the field.
   */
  getEntityValueByName(key: any, date: any) {
    let value: any[] = Object.entries(EntityData).find((data) => data.find((a) => a === key)) || [];
    if (date === 'Date') {
      return this.datePipe.transform(value[1], 'yyyy-MM-dd');
    }
    return value[1] || null;
  }

  /**
   * This method is used to set the fraction digits
   * @param val corresponding fraction value
   */
  setFractionDigits(val: number) {
    return val ? val / Math.pow(10, val) : null;
  }
}
