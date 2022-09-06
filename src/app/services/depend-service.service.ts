import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  constructor() { }

  testTitle = "Hello Test Function!";

  testFunc(){
    return this.testTitle;
  }
}
