import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceTareaPage } from './avance-tarea.page';

describe('AvanceTareaPage', () => {
  let component: AvanceTareaPage;
  let fixture: ComponentFixture<AvanceTareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanceTareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanceTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
