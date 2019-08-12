import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message ="I am from Parent";

  obj={
    fname:"Murali",
    lname:"Krishna"
  }
  myArray: { "id": number; "email": string; "username": string; "password": string; }[];
  

  constructor() { }

  ngOnInit() {
    this.myArray = users;
  }

  receiveData(msg){
    this.message = msg
   
  }
  
}
let users = [
  {
      "id": 666,
      "email": "JGolaner@tincidunt.ly",
      "username": "SBudgell",
      "password": "GiH0j"
  },
  {
      "id": 667,
      "email": "MHovanec@mattis.org",
      "username": "GFeger",
      "password": "j0f0w"
  },
  {
      "id": 668,
      "email": "AHippert@amet.io",
      "username": "PKailin",
      "password": "H9Azl"
  },
  {
      "id": 669,
      "email": "KPyo@lacus.gov",
      "username": "GGonzalez",
      "password": "1MInj"
  },
  {
      "id": 670,
      "email": "JCastrucci@mattis.io",
      "username": "YPies",
      "password": "wjytw"
  }
]
