export class PersonBase<T> {
    value: string;
    key: string;
    label: string;
    required: boolean;
    length: any;
    totalDigits: any;
    fractionDigits: any;
    readOnly: boolean;
    type: string;
    controlType: string;
  
    constructor(
      options: {
        value?: string;
        key?: string;
        label?: string;
        required?: boolean;
        length?: any;
        totalDigits?: any;
        fractionDigits?: any;
        readOnly?: boolean;
        type?: string;
        controlType? : string;
      } = {}
    ) {
      this.value = options.value || '';
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.length = options.length || null;
      this.totalDigits = options.totalDigits || null;
      this.fractionDigits = options.fractionDigits || null;
      this.readOnly = options.readOnly || false;
      this.type = options.type || '';
      this.controlType = options.controlType || 'textbox';
    }
  }
  