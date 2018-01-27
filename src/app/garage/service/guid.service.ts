import { Injectable } from '@angular/core';

@Injectable()
export class GuidService {

  constructor() { }


  s4():string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  getGuiid():string {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
    this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

}
