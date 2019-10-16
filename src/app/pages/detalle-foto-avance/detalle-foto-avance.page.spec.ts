import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFotoAvancePage } from './detalle-foto-avance.page';

describe('DetalleFotoAvancePage', () => {
  let component: DetalleFotoAvancePage;
  let fixture: ComponentFixture<DetalleFotoAvancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFotoAvancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFotoAvancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
