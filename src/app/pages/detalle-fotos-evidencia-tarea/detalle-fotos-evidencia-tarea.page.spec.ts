import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFotosEvidenciaTareaPage } from './detalle-fotos-evidencia-tarea.page';

describe('DetalleFotosEvidenciaTareaPage', () => {
  let component: DetalleFotosEvidenciaTareaPage;
  let fixture: ComponentFixture<DetalleFotosEvidenciaTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFotosEvidenciaTareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFotosEvidenciaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
