import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.css']
})
export class Sib2Component implements OnInit {
  msgFromSib1;

  objFromSib1 ={};

  arrayFromSib1 :any = [];
  keys: string[];
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.exchangeData.subscribe(res=>{
      console.log(res)
      this.msgFromSib1 = res;
    })

    this.commonService.exchangeData.subscribe(resl=>{
      console.log(resl)
      this.objFromSib1 = resl;

      this.keys = Object.keys(this.objFromSib1)
    })
    this.commonService.exchangeData2.subscribe(reslt=>{
      console.log(reslt)
      this.arrayFromSib1 = reslt;
    })
  
  }
  

}
