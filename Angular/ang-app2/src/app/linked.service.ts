import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedService {
  exchangeData = new Subject
  shareData(msg) {
    console.log("I am sendData method inside service")
    this.exchangeData.next(msg)
  }
  

  constructor() { }
}
