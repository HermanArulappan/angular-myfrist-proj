import { Injectable } from '@angular/core';

@Injectable()
export class ListServiceService {
  info1: string[] = ['Herman', 'from Tampines'];
  info2: string[] = ['Chandran', 'from India'];
  info3: string[] = ['Jaya', 'from Budur'];

  constructor() {}

  getInfo1() {
    return this.info1;
  }
  getInfo2() {
    return this.info2;
  }
  getInfo3() {
    return this.info3;
  }

  addInfo(info: string) {
    console.log(this.info1);
    this.info1.push(info);
    console.log(this.info1);
    return this.info1;
  }
}
