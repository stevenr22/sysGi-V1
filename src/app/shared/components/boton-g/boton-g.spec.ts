import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonG } from './boton-g';

describe('BotonG', () => {
  let component: BotonG;
  let fixture: ComponentFixture<BotonG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
