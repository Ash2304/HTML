import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receive ;
  @Input() receobj;
  @Input() recearray;
  
  @Output() sendData = new EventEmitter()

  messagefromChild="Hello Angular From Child"
 

  constructor() { }

  ngOnInit() {
    console.log(this.receive)
    
  }

  sendInfoToParent(){
    console.log("sendInfoToParent is called")

    this.sendData.emit(this.messagefromChild)
    
  }

  sendObjToParent(){
    console.log("SendObjToParent is called")
    
    
  }
}
