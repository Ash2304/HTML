import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshnewComponent } from './ashnew.component';

describe('AshnewComponent', () => {
  let component: AshnewComponent;
  let fixture: ComponentFixture<AshnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
