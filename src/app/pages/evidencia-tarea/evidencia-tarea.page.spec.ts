import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciaTareaPage } from './evidencia-tarea.page';

describe('EvidenciaTareaPage', () => {
  let component: EvidenciaTareaPage;
  let fixture: ComponentFixture<EvidenciaTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenciaTareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
