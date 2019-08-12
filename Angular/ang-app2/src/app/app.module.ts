import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AshaComponent } from './asha/asha.component';
import { AshnewComponent } from './ashnew/ashnew.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sib1Component } from './sib1/sib1.component';
import { Sib2Component } from './sib2/sib2.component';
import { Sib3Component } from './sib3/sib3.component';
import { Sib4Component } from './sib4/sib4.component';
import { HttpCompComponent } from './http-comp/http-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    AshaComponent,
    AshnewComponent,
    ParentComponent,
    ChildComponent,
    Sib1Component,
    Sib2Component,
    Sib3Component,
    Sib4Component,
    HttpCompComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
