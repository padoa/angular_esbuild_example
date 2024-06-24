import { Component, inject } from '@angular/core';
import { AppService } from 'services/app.service';
import { NotProvidedService } from 'services/not-provided.service';

@Component({
  selector: 'dummy-standalone',
  standalone: true,
  imports: [],
  templateUrl: './dummy-standalone.component.html',
  providers: [AppService],
})
export class DummyStandaloneComponent {
  title = 'dummy standalone component';

  constructor() {
    console.log('DummyStandaloneComponent constructor', DummyStandaloneComponent.name);
    console.log('AppService', inject(AppService));
    console.log('NotProvidedService', inject(NotProvidedService));
  }
}
