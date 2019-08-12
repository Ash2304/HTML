import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css']
})
export class AshaComponent implements OnInit {

  message =" This Component Created By Angular CLI";
  person = {
    "id": 9471,
    "email": "MHelgren@pulvinar.org",
    "username": "CBishop",
    "password": "E6HJI"
}
  constructor() { }

  ngOnInit() {
  }

}
