/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NextChildComponent } from './next-child.component';

describe('NextChildComponent', () => {
  let component: NextChildComponent;
  let fixture: ComponentFixture<NextChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
