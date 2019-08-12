import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  exchangeData = new Subject
  exchangeData2 = new Subject

  constructor() { }

  shareObjData(mesg){
    console.log(" I am sendData method inside Service ")
    this.exchangeData.next(mesg)
  }

  shareArryData(mesg){
    this.exchangeData2.next(mesg)

  }
}
