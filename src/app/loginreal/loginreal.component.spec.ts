/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginrealComponent } from './loginreal.component';

describe('LoginrealComponent', () => {
  let component: LoginrealComponent;
  let fixture: ComponentFixture<LoginrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
