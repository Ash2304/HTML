import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.css']
})
export class Sib1Component implements OnInit {
  message = "I am from Sib1 Component"

  obj = {
    fname:"Asha",
    lname:"Rajan"
  }

  myArray: { "id": number; "email": string; "username": string; "password": string; }[];
  users: any;
  // lifecycle of the Component
  constructor(private commonService:CommonService) { 
    console.log("I am going to Get Called when Application Starts")
  }
  //lifecycle of the component
  ngOnInit() {
    console.log("I will be called after constructor")
  
  }
  
  

  sendMessage (){
    console.log("sendMessage called")
    // this.commonService.shareData(this.message)
  }

  sendObj(){
    console.log("sendObj called")
    this.commonService.shareObjData(this.obj)
  }

  sendArray(){
    console.log("sendArray called")
    this.commonService.shareArryData(users)
  }

}
let users = [
  {
      "id": 1237,
      "email": "CChristopher@tortor.org",
      "username": "EJordan",
      "password": "7ebhg"
  },
  {
      "id": 1238,
      "email": "MChang@ipsum.gov",
      "username": "GMarr",
      "password": "si7CE"
  },
  {
      "id": 1239,
      "email": "YStart@ante.io",
      "username": "JKaiser",
      "password": "qPgP5"
  }
]

