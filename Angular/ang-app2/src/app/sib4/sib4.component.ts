import { Component, OnInit } from '@angular/core';
import { LinkedService } from '../linked.service';

@Component({
  selector: 'app-sib4',
  templateUrl: './sib4.component.html',
  styleUrls: ['./sib4.component.css']
})
export class Sib4Component implements OnInit {
  msgFromSib3;
  constructor(private linkedService:LinkedService) { }

  ngOnInit() {
    this.linkedService.exchangeData.subscribe(res=>{
      console.log(res)
      this.msgFromSib3 = res;
    })
  }

}
