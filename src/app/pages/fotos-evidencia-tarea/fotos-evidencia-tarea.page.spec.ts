import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosEvidenciaTareaPage } from './fotos-evidencia-tarea.page';

describe('FotosEvidenciaTareaPage', () => {
  let component: FotosEvidenciaTareaPage;
  let fixture: ComponentFixture<FotosEvidenciaTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosEvidenciaTareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosEvidenciaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
