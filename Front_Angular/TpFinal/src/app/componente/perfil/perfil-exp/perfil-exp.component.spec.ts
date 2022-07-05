import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilExpComponent } from './perfil-exp.component';

describe('PerfilExpComponent', () => {
  let component: PerfilExpComponent;
  let fixture: ComponentFixture<PerfilExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
