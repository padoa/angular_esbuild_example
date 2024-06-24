import { Component, inject } from '@angular/core';
import { AppService } from 'services/app.service';
import { NotProvidedService } from 'services/not-provided.service';

@Component({
  selector: 'dummy',
  templateUrl: './dummy.component.html',
})
export class DummyComponent {
  title = 'dummy component (inside module)';

  constructor() {
    console.log('DummyComponent constructor', DummyComponent.name);
    console.log('AppService', inject(AppService));
    console.log('NotProvidedService', inject(NotProvidedService));
  }
}
