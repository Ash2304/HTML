import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { ChildHttpComponent } from './child-http/child-http.component';
import { FormsComponent } from './forms/forms.component';
import{ FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component,
    HttpCompComponent,
    ChildHttpComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
