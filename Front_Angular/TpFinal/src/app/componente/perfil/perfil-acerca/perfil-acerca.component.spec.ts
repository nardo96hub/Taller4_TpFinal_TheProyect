import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAcercaComponent } from './perfil-acerca.component';

describe('PerfilAcercaComponent', () => {
  let component: PerfilAcercaComponent;
  let fixture: ComponentFixture<PerfilAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAcercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
