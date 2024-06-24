import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from 'services/app.service';
import { DummyModule } from 'modules/dummy-module/dummy.module';
import { DummyStandaloneComponent } from 'modules/dummy-standalone/dummy-standalone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DummyStandaloneComponent, DummyModule],
  templateUrl: './app.component.html',
  providers: [AppService],
})
export class AppComponent {
  public title = 'angular esbuild example';
  public showDummyStandalone = false;
  public showDummyModule = false;

  constructor() {
    console.log('AppComponent constructor', AppComponent.name);
  }
}
