import { Component, OnInit } from '@angular/core';
import { LinkedService } from '../linked.service';

@Component({
  selector: 'app-sib3',
  templateUrl: './sib3.component.html',
  styleUrls: ['./sib3.component.css']
})
export class Sib3Component implements OnInit {
msgg = "I am from Sib3 Component"

  constructor(private linkedService:LinkedService) {
    console.log("I am going to Get Called when Application Starts")
   }

  ngOnInit() {
    console.log("I will be called after constructor")

  }

  sendInfo(){
    console.log("sendInfo is called")
    this.linkedService.shareData(this.msgg)
  }

}
