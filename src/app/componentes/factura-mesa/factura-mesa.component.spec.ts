import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaMesaComponent } from './factura-mesa.component';

describe('FacturaMesaComponent', () => {
  let component: FacturaMesaComponent;
  let fixture: ComponentFixture<FacturaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
