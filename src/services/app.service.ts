import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() {
    console.log('AppService constructor', AppService.name);
  }
}
