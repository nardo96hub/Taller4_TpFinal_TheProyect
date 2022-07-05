import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaPerfilComponent } from './descarga-perfil.component';

describe('DescargaPerfilComponent', () => {
  let component: DescargaPerfilComponent;
  let fixture: ComponentFixture<DescargaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargaPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
