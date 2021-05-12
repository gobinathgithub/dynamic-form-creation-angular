import { Component } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonService]
})
export class AppComponent {
  persons: any[];

  constructor(service: PersonService) {
    this.persons = service.getPersons();
  }
}
