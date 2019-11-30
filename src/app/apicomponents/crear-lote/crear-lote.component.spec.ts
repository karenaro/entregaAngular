import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLoteComponent } from './crear-lote.component';

describe('CrearLoteComponent', () => {
  let component: CrearLoteComponent;
  let fixture: ComponentFixture<CrearLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
