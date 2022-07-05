import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProyectoComponent } from './perfil-proyecto.component';

describe('PerfilProyectoComponent', () => {
  let component: PerfilProyectoComponent;
  let fixture: ComponentFixture<PerfilProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
