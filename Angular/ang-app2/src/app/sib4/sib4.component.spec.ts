import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sib4Component } from './sib4.component';

describe('Sib4Component', () => {
  let component: Sib4Component;
  let fixture: ComponentFixture<Sib4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sib4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sib4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
