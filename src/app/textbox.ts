import { PersonBase } from './person.base';

export class Textbox extends PersonBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}