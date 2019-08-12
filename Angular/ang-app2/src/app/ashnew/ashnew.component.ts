import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ashnew',
  templateUrl: './ashnew.component.html',
  styleUrls: ['./ashnew.component.css']
})
export class AshnewComponent implements OnInit {
  myUsers =[]
  constructor() { }

  ngOnInit() {
  }
  showUsers(){
    this.myUsers = users;

  }
  hideUsers(){
    this.myUsers = []
  }

  delFirst(){
    this.myUsers.shift()
  }
  delLast(){
    this.myUsers.pop()
  }
  delMid(){
    this.myUsers.splice(1,1)
  }
  addBeg(){
    this.myUsers.unshift({
      "id": 9471,
      "email": "MHelgren@pulvinar.org",
      "username": "Asha",
      "password": "E6HJI"
  })
  }
  addLast(){
    this.myUsers.push({
      "id": 9471,
      "email": "MHelgren@pulvinar.org",
      "username": "Rachel",
      "password": "E6HJI"
  })
    }
  addMid(){
    this.myUsers.splice(2,0,{
      "id": 9471,
      "email": "MHelgren@pulvinar.org",
      "username": "ABC",
      "password": "E6HJI"
  })
  }
}

const users = [
  {
      "id": 9471,
      "email": "MHelgren@pulvinar.org",
      "username": "CBishop",
      "password": "E6HJI"
  },
  {
      "id": 9472,
      "email": "JGreene@sollicitudin.io",
      "username": "PBachmeier",
      "password": "4rr3O"
  },
  {
      "id": 9473,
      "email": "XCavalier@nec.com",
      "username": "CRenner",
      "password": "gOzvX"
  }
]