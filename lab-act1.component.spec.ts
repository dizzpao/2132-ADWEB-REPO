import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAct1Component } from './lab-act1.component';

describe('LabAct1Component', () => {
  let component: LabAct1Component;
  let fixture: ComponentFixture<LabAct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabAct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
