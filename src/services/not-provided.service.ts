import { Injectable } from '@angular/core';

@Injectable()
export class NotProvidedService {
  constructor() {
    console.log('NotInjectedService constructor', NotProvidedService.name);
  }
}
