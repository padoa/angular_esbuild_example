import { NgModule } from '@angular/core';
import { DummyComponent } from 'modules/dummy-module/dummy.component';
import { AppService } from 'services/app.service';

@NgModule({
  imports: [],
  declarations: [
    DummyComponent
  ],
  exports: [
    DummyComponent
  ],
  providers: [
    AppService,
  ],
})
export class DummyModule {}
